import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store';

export const useAuth = () => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    if (!token) {
      setAuth(null);
      return;
    }
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(deleteToken());
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = typeof iconImg === 'string' ?
          iconImg.replace(/\?.*$/, '') : '';
        console.log(name, img);
        setAuth({name, img});
      })
      .catch(error => {
        console.error(error);
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
