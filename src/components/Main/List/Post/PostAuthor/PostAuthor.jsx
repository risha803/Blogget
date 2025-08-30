import style from './PostAuthor.module.css';
import PropTypes from 'prop-types';

export const PostAuthor = ({author}) => {
  console.log('author:', author);
  return (
    <a className={style.linkAuthor} href='#author'>{author}</a>
  );
};

PostAuthor.propTypes = {
  author: PropTypes.string.isRequired,
};

export default PostAuthor;
