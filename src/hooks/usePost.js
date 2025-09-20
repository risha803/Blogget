import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postRequestDataAsync} from '../store/auth/postAction';

export const usePost = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.post.loading);
  const error = useSelector(state => state.post.error);
  const posts = useSelector(state => state.post.data);

  useEffect(() => {
    if (token) {
      dispatch(postRequestDataAsync());
    }
  }, [token]);
  return {posts, loading, error};
};
