import {URL_API} from '../api/const';
import formatDate from '../utilits/formatDate';
import axios from 'axios';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_ERROR = 'COMMENTS_ERROR';

export const commentRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentRequestSuccess = (post, comments) => ({
  type: COMMENTS_SUCCESS,
  post,
  comments,
});

export const commentError = (error) => ({
  type: COMMENTS_ERROR,
  error,
});

export const commentRequestAsync = (postId) => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token || !postId) return;
  dispatch(commentRequest());
  axios(`${URL_API}/comments/${postId}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      const [
        {
          data: {
            children: [{data: postData}],
          },
        },
        {
          data: {children: commentChildren},
        },
      ] = data;

      const post = {
        id: postData.id,
        title: postData.title,
        author: postData.author || 'Unknown',
        selftext: postData.selftext,
        date: formatDate(postData.created_utc * 1000),
      };

      const comments = commentChildren
        .map(({data}) => ({
          id: data.id,
          author: data.author || 'Unknown',
          text: data.body || '',
          date: formatDate(data.created_utc * 1000),
        }))
        .filter((comment) => comment.text);

      dispatch(commentRequestSuccess(post, comments));
    })
    .catch((err) => {
      console.error('Fetch error:', err);
      dispatch(commentError(err.message));
    });
};
