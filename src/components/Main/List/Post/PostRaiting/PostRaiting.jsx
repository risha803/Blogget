import style from './PostRaiting.module.css';
import PropTypes from 'prop-types';

export const PostRaiting = ({ups}) => {
  console.log(ups);
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Увеличивать рейтинг' />
      <p className={style.ups}>{ups}</p>
      <button className={style.down} aria-label='Уменьшить рейтинг' />
    </div>
  );
};

PostRaiting.propTypes = {
  ups: PropTypes.number.isRequired,
};

export default PostRaiting;
