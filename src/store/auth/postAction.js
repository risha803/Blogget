import axios from 'axios';
import {URL_API} from '../../api/const';
import formatDate from '../../utilits/formatDate';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_SUCCESS_AFTER = 'POST_REQUEST_SUCCESS_AFTER';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (data, after) => ({
  type: POST_REQUEST_SUCCESS,
  data,
  after,
});

export const postRequestSuccessAfter = (data, after) => ({
  type: POST_REQUEST_SUCCESS_AFTER,
  data,
  after,
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const postRequestDataAsync = (isFirstLoad =
false, newPage) => (dispatch, getState) => {
  let page = getState().post.page;
  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }
  const token = getState().token.token;
  const after = getState().post.after;
  if (!token) {
    console.warn('Token отсутствует');
    return;
  }

  if (!isFirstLoad && after === null) {
    console.log('Больше постов нет');
    return;
  }

  dispatch(postRequest());

  const url = `${URL_API}/${page}?limit=10${!isFirstLoad && after ?
    `&after=${after}` : ''}`;
  axios.get(url, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      const isImageUrl = (url) => {
        const imageRegex = /\.(jpeg|jpg|gif|png|bmp|webp)$/i;
        return typeof url === 'string' &&
          url.startsWith('http') &&
          imageRegex.test(url);
      };

      const normalizedPosts = data.data.children.map(({data}) => ({
        id: data.id,
        title: data.title,
        author: data.author,
        thumbnail: isImageUrl(data.thumbnail) ? data.thumbnail : null,
        ups: data.ups,
        date: formatDate(data.created_utc * 1000),
      }));

      const newAfter = data.data.after;

      if (isFirstLoad) {
        dispatch(postRequestSuccess(normalizedPosts, newAfter));
      } else {
        dispatch(postRequestSuccessAfter(normalizedPosts, newAfter));
      }
    })
    .catch(err => {
      console.error('Ошибка запроса:', err);
      dispatch(postRequestError(err.message));
    });
};

