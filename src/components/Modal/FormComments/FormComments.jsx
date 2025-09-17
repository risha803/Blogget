import {useContext} from 'react';
import {tokenContext} from '../../../context/tokenContext';
import style from './FormComments.module.css';
import {commentContext} from '../../../context/commentContext';

const FormComment = () => {
  // const inputRef = useRef(null);
  const {username} = useContext(tokenContext);
  const {value, setValue} = useContext(commentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
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
