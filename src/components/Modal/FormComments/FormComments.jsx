import style from './FormComments.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/auth/commentReducer';
import {useAuth} from '../../../hooks/useAuth';

const FormComment = () => {
  const value = useSelector(state => state.comment.comment);
  const dispatch = useDispatch();
  const {auth} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Комментарий:', value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h3 size={14}>
        {auth?.name || 'Имя авторизованного пользователя'}
      </h3>
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
