import {setToken} from '../hooks/token';

const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

const initialState = {
  token: '',
};

export const updateToken = (token) => {
  setToken(token);
  return {
    type: UPDATE_TOKEN,
    token,
  };
};

export const tokenMiddleware = store => next => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }
  if (action.type === DELETE_TOKEN) {
    setToken('');
  }
  next(action);
};

export const deleteToken = () => {
  localStorage.removeItem('bearer');
  return {
    type: DELETE_TOKEN,
  };
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};
