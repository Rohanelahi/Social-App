import { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  TextField,
  Button,
  styled,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import ThreadedComments from './ThreadedComments';

const PostContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  border: '1px solid',
  borderColor: theme.palette.divider,
  overflow: 'hidden',
  marginBottom: '20px',
}));

const CommentInput = styled(Box)({
  display: 'flex',
  padding: '12px 16px',
  gap: '12px',
  borderTop: '1px solid #dbdbdb',
  alignItems: 'center',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
});

const PostButton = styled(Button)({
  backgroundColor: '#000',
  color: '#fff',
  padding: '6px 16px',
  borderRadius: '4px',
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#333',
  },
  '&.Mui-disabled': {
    backgroundColor: '#cccccc',
    color: '#666666',
  },
});

function Post({ post: initialPost }) {
  const [post, setPost] = useState(initialPost);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handlePostComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      username: 'current_user', // Replace with actual logged-in user
      userAvatar: 'https://i.pravatar.cc/150?img=11',
      text: newComment.trim(),
      timestamp: 'Just now',
      likes: 0,
      replies: []
    };

    setPost(prevPost => ({
      ...prevPost,
      comments: [newCommentObj, ...(prevPost.comments || [])]
    }));
    
    setNewComment('');
    setShowComments(true);
  };

  const handleUpdateComments = (updatedComments) => {
    setPost(prevPost => ({
      ...prevPost,
      comments: updatedComments
    }));
  };

  return (
    <PostContainer>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <Avatar src={post.userAvatar} />
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold">
            {post.username}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {post.timestamp}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: '100%', position: 'relative' }}>
        <img
          src={post.imageUrl}
          alt={post.caption}
          style={{ width: '100%', display: 'block' }}
        />
      </Box>

      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton onClick={() => setLiked(!liked)}>
              {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            </IconButton>
            <IconButton onClick={() => setShowComments(!showComments)}>
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Box>
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
        </Box>

        <Typography variant="subtitle2" fontWeight="bold">
          {post.likes.toLocaleString()} likes
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          <Box component="span" fontWeight="bold" mr={1}>
            {post.username}
          </Box>
          {post.caption}
        </Typography>

        {post.comments?.length > 0 && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, cursor: 'pointer' }}
            onClick={() => setShowComments(!showComments)}
          >
            View all {post.comments.length} comments
          </Typography>
        )}
      </Box>

      {showComments && (
        <ThreadedComments 
          comments={post.comments} 
          onUpdateComments={handleUpdateComments}
        />
      )}

      <CommentInput>
        <StyledTextField
          fullWidth
          placeholder="Add a comment..."
          variant="outlined"
          size="small"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handlePostComment();
            }
          }}
        />
        <PostButton
          disabled={!newComment.trim()}
          onClick={handlePostComment}
        >
          Post
        </PostButton>
      </CommentInput>
    </PostContainer>
  );
}

export default Post;
