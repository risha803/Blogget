import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import PostImage from './PostImage/PostImage';
import PostTitle from './PostTitle/PostTitle';
import PostAuthor from './PostAuthor/PostAuthor';
import PostRaiting from './PostRaiting/PostRaiting';
import PostDate from './PostDate/PostDate';
import DeleteButton from './DeleteButton/DeleteButton';
import Modal from '../../../Modal';
import {useState} from 'react';

export const Post = ({postData}) => {
  const {
    title,
    author,
    ups,
    date,
    selftext: markdown,
    thumbnail
  } = postData;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageSrc = thumbnail || notphoto;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <li className={style.post}>
        <PostImage src={imageSrc} alt={title} />
        <div className={style.content}>
          <PostTitle title={title} onClick={openModal} />
          <PostAuthor author={author} />
        </div>
        <PostRaiting ups={ups}/>
        <PostDate date={date} />
        <DeleteButton />
      </li>

      {isModalOpen && (
        <Modal
          title={title}
          author={author}
          markdown={markdown}
          onClose={closeModal}
        />
      )}
    </>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    ups: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    selftext: PropTypes.string.isRequired,
  }).isRequired,
};
