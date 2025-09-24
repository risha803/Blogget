import React, {useEffect, useRef} from 'react';
import Post from './Post';
import style from './List.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestDataAsync} from '../../../store/auth/postAction';

export const List = () => {
  const {data: posts, loading, error, after} = useSelector(state => state.post);
  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRequestDataAsync(true));
  }, [dispatch]);

  useEffect(() => {
    if (!endList.current || !after) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        dispatch(postRequestDataAsync(false));
      }
    }, {
      rootMargin: '150px',
    });

    observer.observe(endList.current);

    return () => observer.disconnect();
  }, [after, loading, dispatch]);

  if (loading && posts.length === 0) return <p>Загрузка постов...</p>;
  if (error) return <p>Ошибка загрузки: {error}</p>;
  if (!posts.length) return <p>Посты не найдены.</p>;

  return (
    <ul className={style.list}>
      {posts.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
      <li ref={endList} className={style.end}></li>
    </ul>
  );
};
