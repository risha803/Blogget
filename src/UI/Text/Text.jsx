import classNames from "classnames/bind";
import style from './Text.module.css';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsie,
    dsize,
    className,
    children,
  } = prop;

  const classes = classNames(
    className,
    style[`fs${size}`],
    style[color],
  );
  return <As className={classes}>{children}</As>
};