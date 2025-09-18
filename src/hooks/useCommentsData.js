import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import formatDate from '../utilits/formatDate';
import {useSelector} from 'react-redux';

export const useCommentsData = (postId) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector(state => state.token);

  useEffect(() => {
    if (!token || !postId) return;

    setLoading(true);
    setError(null);

    fetch(`${URL_API}/comments/${postId}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: postData}],
            },
          },
          {
            data: {
              children: commentChildren,
            },
          },
        ]) => {
          const normalizedPost = {
            id: postData.id,
            title: postData.title,
            author: postData.author || 'Unknown',
            selftext: postData.selftext,
            date: formatDate(postData.created_utc * 1000),
          };

          const normalizedComments = commentChildren
            .map(({data}) => ({
              id: data.id,
              author: data.author || 'Unknown',
              text: data.body || 'No text',
              date: formatDate(data.created_utc * 1000),
            }))
            .filter((comment) => comment.text);

          setPost(normalizedPost);
          setComments(normalizedComments);
          setLoading(false);
        }
      )
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err);
        setLoading(false);
      });
  }, [postId, token]);

  return [post, comments, loading, error];
};
