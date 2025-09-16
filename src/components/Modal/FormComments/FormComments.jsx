import {useRef, useContext} from 'react';
import {tokenContext} from '../../../context/tokenContext';
import style from './FormComments.module.css';

const FormComment = () => {
  const inputRef = useRef(null);
  const {username} = useContext(tokenContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentText = inputRef.current.value.trim();
    if (commentText) {
      console.log(commentText);
      inputRef.current.value = '';
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h3 size={14} >{username ||
        'Имя авторизованного пользователя'}</h3>
      <textarea className={style.textarea} ref={inputRef}></textarea>
      <button className={style.btn} type="submit">Отправить</button>
    </form>
  );
};

export default FormComment;
