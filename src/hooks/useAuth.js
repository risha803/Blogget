import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authLogout} from '../store/auth/action';
import {authRequestAsync} from '../store/auth/action';

export const useAuth = () => {
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.data);
  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);
  const clearAuth = () => dispatch(authLogout);

  return [auth, loading, clearAuth];
};
