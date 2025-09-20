import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import formatDate from '../utilits/formatDate';
import {useSelector} from 'react-redux';

export const usePost = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const token = useSelector(state => state.token.token);

  const isImageUrl = (url) => {
    const imageRegex = /\.(jpeg|jpg|gif|png|bmp|webp)$/i;
    return typeof url === 'string' &&
      url.startsWith('http') &&
      imageRegex.test(url);
  };

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(token);
        const normalizedPosts = data.data.children.map(({data}) => ({
          id: data.id,
          title: data.title,
          author: data.author,
          thumbnail: isImageUrl(data.thumbnail) ? data.thumbnail : null,
          ups: data.ups,
          date: formatDate(data.created_utc * 1000),
        }));
        setPosts(normalizedPosts);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError(err);
      });
  }, [token]);
  return [posts, setPosts, error];
};
