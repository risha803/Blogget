import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import Comments from './Comments/Comments';
import FormComment from './FormComments/FormComments';
import {useCommentsData} from '../../hooks/useCommentsData';
import {useEffect} from 'react';

export const Modal = ({id, onClose}) => {
  const [post, comments, loading] = useCommentsData(id);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        {loading || !post ? (
          <p>Загрузка...</p>
        ) : (
          <>
            <h2 className={style.title}>{post.title}</h2>
            <div className={style.content}>
              <Markdown options={{overrides:
                {a: {target: '_blank'}}}}>{post.selftext}</Markdown>
            </div>
            <p className={style.author}>{post.author}</p>

            <Comments comments={comments} />
            <FormComment />

            <button className={style.close} onClick={onClose}>
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
