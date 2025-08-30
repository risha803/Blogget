import style from './PostImage.module.css';
import PropTypes from 'prop-types';

const PostImage = ({src, alt}) => (
  <img className={style.img} src={src} alt={alt} />
);

PostImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PostImage;
