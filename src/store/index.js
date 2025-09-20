import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {commentsReducer} from '../store/commentReducer';
import {commentReducer} from '../store/auth/commentReducer';
import {thunk} from 'redux-thunk';
import {tokenReducer, tokenMiddleware} from './tokenReducer';
import {authReducer} from './auth/authReducer';
import postReducer from './auth/postReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  comments: commentsReducer,
  auth: authReducer,
  post: postReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
