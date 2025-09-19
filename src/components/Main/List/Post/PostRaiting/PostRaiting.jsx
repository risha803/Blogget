import style from './PostRaiting.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

export const PostRaiting = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Увеличивать рейтинг' />
    <Text As='p' bold size={12} tsize={16}
      color='#8f8f8f' className={style.ups}>{ups}</Text>
    <button className={style.down} aria-label='Уменьшить рейтинг' />
  </div>
);

PostRaiting.propTypes = {
  ups: PropTypes.number.isRequired,
};

export default PostRaiting;
