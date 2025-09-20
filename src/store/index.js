import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {commentReducer} from './commentReducer';
import {thunk} from 'redux-thunk';
import {tokenReducer, tokenMiddleware} from './tokenReducer';
import {authReducer} from './auth/authReducer';
import postReducer from './auth/postReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  commentReducer,
  auth: authReducer,
  post: postReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
