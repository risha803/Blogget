export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_REQUEST_SUCCESS = 'POST_REQUEST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postRequest = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess = (data) => ({
  type: POST_REQUEST_REQUEST_SUCCESS,
  data,
});

export const postRequestError = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});
