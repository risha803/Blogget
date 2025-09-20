import React from 'react';
import Post from './Post';
import style from './List.module.css';
import {usePost} from '../../../hooks/usePost';

export const List = () => {
  const {posts, loading, error} = usePost();

  if (loading) return <p>Загрузка постов...</p>;
  if (error) return <p>Ошибка загрузки: {error.message}</p>;

  if (!posts.length) {
    return <p>Посты не найдены.</p>;
  }

  return (
    <ul className={style.list}>
      {posts?.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
