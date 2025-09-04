import React, {useState} from 'react';
import {useEffect} from 'react';
import {URL_API} from '../../../api/const';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';

export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/);
        setAuth({name, img});
      })
      .catch(error => {
        console.error(error);
        setAuth({});
      });
  }, [token]);
  console.log('auth:', auth);
  console.log('auth.name:', auth.name);

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={auth.name}
          />
        </button>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon width={36} height={36}></LoginIcon>
        </Text>
      )}
    </div>
  );
};


Auth.propTypes = {
  token: PropTypes.string,
};

