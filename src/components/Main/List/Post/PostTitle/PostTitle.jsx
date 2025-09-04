import style from './PostTitle.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

const PostTitle = ({title}) => (
  <Text As='h2' className={style.title}>
    <Text As='a' size={18} tsize={24}
      className={style.linkPost} href='#post'>{title}</Text>
  </Text>
);

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostTitle;

