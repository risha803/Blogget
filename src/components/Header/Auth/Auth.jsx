import React from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? (
      'Выйти'
    ) : (
      <LoginIcon width={36} height={36}></LoginIcon>
    )}
  </button>
);


Auth.propTypes = {
  auth: PropTypes.bool.isRequired,
};
