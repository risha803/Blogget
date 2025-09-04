import {useState, useEffect} from 'react';

export const useToken = (initialState) => {
  const [token, setToken] = useState(initialState);

  const delToken = () => {
    localStorage.removeItem('bearer');
    setToken('');
  };

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      setToken(token);
    }
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
  }, []);
  return [token, delToken];
};
