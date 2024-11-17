import { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  styled,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';

const CommentContainer = styled(Box)(({ depth = 0 }) => ({
  paddingLeft: depth * 32,
  position: 'relative',
  '&:before': depth > 0 ? {
    content: '""',
    position: 'absolute',
    left: 16,
    top: 0,
    bottom: 0,
    width: 1.5,
    backgroundColor: '#f0f0f0',
  } : {},
}));

const ReplyButton = styled(Button)({
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

function Comment({ comment, depth = 0, onAddReply }) {
  const [liked, setLiked] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (!replyText.trim()) return;
    
    onAddReply(comment.id, {
      id: Date.now(),
      username: 'current_user',
      userAvatar: 'https://i.pravatar.cc/150?img=11',
      text: replyText.trim(),
      timestamp: 'Just now',
      likes: 0,
      replies: []
    });

    setReplyText('');
    setShowReplyInput(false);
  };

  return (
    <CommentContainer depth={depth}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <Avatar src={comment.userAvatar} sx={{ width: 32, height: 32 }} />
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {comment.username}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {comment.timestamp}
              </Typography>
            </Box>
            <Typography variant="body2">{comment.text}</Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <IconButton 
                size="small" 
                onClick={() => setLiked(!liked)}
                sx={{ p: 0 }}
              >
                {liked ? 
                  <FavoriteIcon fontSize="small" color="error" /> : 
                  <FavoriteBorderIcon fontSize="small" />
                }
              </IconButton>
              <Button
                startIcon={<ReplyIcon />}
                size="small"
                onClick={() => setShowReplyInput(!showReplyInput)}
                sx={{ color: 'text.secondary', p: 0 }}
              >
                Reply
              </Button>
            </Box>
          </Box>
        </Box>

        {showReplyInput && (
          <Box sx={{ display: 'flex', gap: 2, mt: 2, ml: 5 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleReply();
                }
              }}
            />
            <ReplyButton
              disabled={!replyText.trim()}
              onClick={handleReply}
            >
              Reply
            </ReplyButton>
          </Box>
        )}
      </Box>

      {comment.replies?.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply}
          depth={depth + 1}
          onAddReply={onAddReply}
        />
      ))}
    </CommentContainer>
  );
}

function ThreadedComments({ comments, onUpdateComments }) {
  const handleAddReply = (commentId, newReply) => {
    const updateReplies = (comments) => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply]
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: updateReplies(comment.replies)
          };
        }
        return comment;
      });
    };

    const updatedComments = updateReplies(comments);
    onUpdateComments(updatedComments);
  };

  return (
    <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onAddReply={handleAddReply}
        />
      ))}
    </Box>
  );
}

export default ThreadedComments;
