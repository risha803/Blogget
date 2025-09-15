import style from './PostTitle.module.css';
import PropTypes from 'prop-types';

const PostTitle = ({title, onClick}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <h2 className={style.title}>
      <a
        className={style.linkPost}
        href="#post"
        onClick={handleClick}
      >
        {title}
      </a>
    </h2>
  );
};

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PostTitle;


