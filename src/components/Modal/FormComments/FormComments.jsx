import {useContext} from 'react';
import {tokenContext} from '../../../context/tokenContext';
import style from './FormComments.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();
  // const inputRef = useRef(null);
  const {username} = useContext(tokenContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h3 size={14} >{username ||
        'Имя авторизованного пользователя'}</h3>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      ></textarea>
      <button className={style.btn} type="submit">Отправить</button>
    </form>
  );
};

export default FormComment;
