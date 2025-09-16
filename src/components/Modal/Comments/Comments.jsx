import PropTypes from 'prop-types';
import style from './Comments.module.css';

const Comments = ({comments}) => {
  if (!comments.length) return <p>Нет комментариев</p>;

  return (
    <ul className={style.list}>
      {comments.map(({id, author, text}) => (
        <li key={id} className={style.item}>
          <h3 className={style.author} size={18}>
            {author}
          </h3>
          <p className={style.comments} size={14}>
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Comments;
