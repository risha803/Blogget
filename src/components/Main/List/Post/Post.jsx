import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import PostImage from './PostImage/PostImage';
import PostTitle from './PostTitle/PostTitle';
import PostAuthor from './PostAuthor/PostAuthor';
import PostRaiting from './PostRaiting/PostRaiting';
import PostDate from './PostDate/PostDate';


export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <PostImage src={notphoto} alt={title} />
      <div className={style.content}>
        <PostTitle title={postData.title}/>
        <PostAuthor author={author}/>
      </div>
      <PostRaiting ups={ups}/>
      <PostDate date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    ups: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
