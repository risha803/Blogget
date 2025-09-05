import {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [logIn, setLogIn] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const logOut = () => {
    setLogIn(false);
    delToken();
    clearAuth();
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
  delToken: PropTypes.func,
};

