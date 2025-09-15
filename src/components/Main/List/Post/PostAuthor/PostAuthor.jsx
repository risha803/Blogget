import style from './PostAuthor.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

export const PostAuthor = ({author}) => (
  <Text As='a' color='orange'
    className={style.linkAuthor}
    href='#author'
    size={12}
    tsize={14}
  >
    {author}
  </Text>
);

PostAuthor.propTypes = {
  author: PropTypes.string.isRequired,
};

export default PostAuthor;
