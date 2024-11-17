import React, { useState } from 'react';
import { Heart, Reply, MoreHorizontal } from 'lucide-react';
import { Comment as CommentType } from '../types';

interface CommentProps {
  comment: CommentType;
  level?: number;
}

export default function Comment({ comment, level = 0 }: CommentProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [likes, setLikes] = useState(comment.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className={`${level > 0 ? 'ml-6' : ''}`}>
      <div className="flex items-start space-x-3 group">
        <img
          src={comment.userAvatar}
          alt={comment.username}
          className="w-8 h-8 rounded-full mt-1"
        />
        <div className="flex-1">
          <div className="bg-gray-50 rounded-2xl px-4 py-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{comment.username}</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <p className="text-gray-800 mt-1">{comment.content}</p>
          </div>
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
            <button 
              onClick={handleLike}
              className="flex items-center space-x-1 hover:text-gray-700"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 stroke-red-500' : ''}`} />
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-gray-700">
              <Reply className="w-4 h-4" />
              <span>Reply</span>
            </button>
          </div>
        </div>
      </div>
      
      {comment.replies.length > 0 && (
        <div className="mt-2 ml-11">
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="text-blue-500 hover:text-blue-600 text-sm font-medium"
          >
            {showReplies ? 'Hide replies' : `Show replies (${comment.replies.length})`}
          </button>
          
          {showReplies && (
            <div className="mt-3 space-y-4">
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} level={level + 1} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}