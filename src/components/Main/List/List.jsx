import React from 'react';
import Post from './Post';
import style from './List.module.css';

export const List = props => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title',
      author: 'Nickname',
      ups: 24,
      date: '2025-08-30T09:45:00.000Z',
      id: '235',
    },
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 11,
      date: '2025-09-30T09:22:00.000Z',
      id: '234',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 22,
      date: '2025-08-31T10:45:00.000Z',
      id: '232',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 33,
      date: '2025-08-30T12:45:00.000Z',
      id: '456',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
