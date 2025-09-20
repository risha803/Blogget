import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_ERROR,
} from './commentAction';

const initialState = {
  status: '',
  post: null,
  comments: [],
  error: null,
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case COMMENTS_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        post: action.post,
        comments: action.comments,
      };
    case COMMENTS_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};

