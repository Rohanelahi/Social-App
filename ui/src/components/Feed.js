import { useState, useEffect } from 'react';
import { Box, CircularProgress, Alert } from '@mui/material';
import Post from './Post';
import { postsAPI } from '../services/api';

const FeedContainer = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '24px 16px',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    padding: '16px 0',
  },
}));

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await postsAPI.getPosts();
      setPosts(response.data);
    } catch (err) {
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId) => {
    try {
      const response = await postsAPI.likePost(postId);
      setPosts(posts.map(post => 
        post._id === postId ? response.data : post
      ));
    } catch (err) {
      console.error('Failed to like post:', err);
    }
  };

  const handleComment = async (postId, text) => {
    try {
      const response = await postsAPI.addComment(postId, text);
      setPosts(posts.map(post =>
        post._id === postId 
          ? { ...post, comments: [response.data, ...post.comments] }
          : post
      ));
    } catch (err) {
      console.error('Failed to add comment:', err);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <FeedContainer>
      {posts.map(post => (
        <Post
          key={post._id}
          post={post}
          onLike={() => handleLike(post._id)}
          onComment={(text) => handleComment(post._id, text)}
        />
      ))}
    </FeedContainer>
  );
}

export default Feed;
