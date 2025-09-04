import React, {useState, useEffect} from 'react';
import {URL_API} from '../../../api/const';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [logIn, setLogIn] = useState(false);

  useEffect(() => {
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(error => {
        console.error(error);
        delToken();
        setAuth({});
      });
  }, [token]);

  const logOut = () => {
    setAuth({});
    setLogIn(false);
    delToken();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <div className={style.authWrapper}>
          <button className={style.btn}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={auth.name}
              onClick={() => setLogIn(!logIn)}
            />
          </button>
          {logIn && (
            <button className={style.logout} onClick={logOut}>
              Выйти
            </button>
          )}
        </div>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon width={36} height={36} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.string,
};

