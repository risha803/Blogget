import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';

export const Modal = ({title, markdown, author, onClose}) =>
  ReactDOM.createPortal(
    <div className={style.overlay} onClick={onClose}>
      <div
        className={style.modal}
        onClick={(e) => e.preventDefault()}
      >
        <h2 className={style.title}>{title}</h2>

        <div className={style.content}>
          <Markdown options={{
            overrides: {
              a: {
                target: '_blank',
              },
            },
          }}>
            {markdown}
          </Markdown>
        </div>

        <p className={style.author}>{author}</p>

        <button className={style.close} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
