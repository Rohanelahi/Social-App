import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import Comment from './Comment';
import type { Post as PostType } from '../types';

interface PostProps extends PostType {}

export default function Post({ username, userAvatar, image, caption, likes: initialLikes, comments, timestamp }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 max-w-2xl mx-auto">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={userAvatar} alt={username} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <span className="font-semibold block">{username}</span>
            <span className="text-gray-500 text-sm">{timestamp}</span>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
      
      <img src={image} alt="Post content" className="w-full aspect-square object-cover" />
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button onClick={handleLike} className="focus:outline-none">
              <Heart className={`w-7 h-7 ${isLiked ? 'fill-red-500 stroke-red-500' : 'stroke-gray-700'}`} />
            </button>
            <button onClick={() => setShowComments(!showComments)} className="focus:outline-none">
              <MessageCircle className="w-7 h-7 stroke-gray-700" />
            </button>
          </div>
          <button className="focus:outline-none">
            <Bookmark className="w-7 h-7 stroke-gray-700" />
          </button>
        </div>

        <div className="mb-2">
          <span className="font-semibold">{likes.toLocaleString()} likes</span>
        </div>

        <div className="mb-4">
          <span className="font-semibold">{username}</span>
          <span className="ml-2">{caption}</span>
        </div>

        <button 
          onClick={() => setShowComments(!showComments)}
          className="text-gray-500 text-sm mb-4"
        >
          {showComments ? 'Hide comments' : `View all ${comments.length} comments`}
        </button>

        {showComments && (
          <div className="space-y-4">
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}