import style from './PostTitle.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import Modal from '../../../../Modal';

const PostTitle = ({title, markdown, author}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
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
      {isModalOpen && <Modal markdown={markdown}
        title={title}
        author={author} />}
    </h2>
  );
};

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default PostTitle;

