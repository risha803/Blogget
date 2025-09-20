import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {commentRequestAsync} from '../store/commentAction';

export const useCommentsData = (postId) => {
  const dispatch = useDispatch();

  const post = useSelector(state => state.comments.post);
  const comments = useSelector(state => state.comments.comments);
  const status = useSelector(state => state.comments.status);
  const error = useSelector(state => state.comments.error);
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    console.log('[useCommentsData] postId, token:', postId, token);
    if (postId && token) {
      dispatch(commentRequestAsync(postId));
    }
  }, [postId, token, dispatch]);

  useEffect(() => {
    console.log('[useCommentsData] status/post/comments/error ->',
      {status, post, comments, error});
  }, [status, post, comments, error]);

  return {post, comments, status, error};
};
