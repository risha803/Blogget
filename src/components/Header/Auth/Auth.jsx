import {useState} from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import {Preloader} from '../../../UI/Text/Preloader';


export const Auth = () => {
  const [logIn, setLogIn] = useState(false);
  const {auth, loading, clearAuth} = useAuth();
  const dispatch = useDispatch();

  const logOut = () => {
    setLogIn(false);
    dispatch(deleteToken());
    clearAuth();
  };
  const isAuth = auth && typeof auth === 'object' && auth.name;

  return (
    <div className={style.container}>
      {loading ? (<Preloader />) : isAuth ? (
        <div className={style.authWrapper}>
          <button className={style.btn}>
            <img
              className={style.img}
              src={auth.img || ''}
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

