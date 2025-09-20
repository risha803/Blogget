import axios from 'axios';
import {URL_API} from '../../api/const';
import formatDate from '../../utilits/formatDate';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (data) => ({
  type: POST_REQUEST_SUCCESS,
  data,
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const postRequestDataAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;

  dispatch(postRequest());

  axios.get(`${URL_API}/best`, {
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

      dispatch(postRequestSuccess(normalizedPosts));
    })
    .catch(err => {
      console.error('Fetch error:', err);
      dispatch(postRequestError(err.message));
    });
};
