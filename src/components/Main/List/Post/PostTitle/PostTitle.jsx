import style from './PostTitle.module.css';
import PropTypes from 'prop-types';

const PostTitle = ({title}) => {
  console.log('Received title:', title);

  return (
    <h2 className={style.title}>
      <a className={style.linkPost} href='#post'>{title}</a>
    </h2>
  );
};

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostTitle;

