import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../../utilits/formatDate';


export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log('title, author, ups, date');
  console.log(style);
  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />
      <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost} href='#post'>{title}</a>
        </h2>
        <a className={style.linkAuthor} href='#author'>{author}</a>
      </div>
      <div className={style.raiting}>
        <button className={style.up} aria-label='Увеличивать рейтинг'></button>
        <p className={style.ups}>{ups}</p>
        <button className={style.down} aria-label='Уменьшить рейтинг'></button>
      </div>
      <time className={style.date} dateTime={date}>{formatDate(date)}</time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    ups: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
