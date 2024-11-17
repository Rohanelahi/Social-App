export interface Comment {
  id: number;
  username: string;
  userAvatar: string;
  content: string;
  likes: number;
  timestamp?: string;
  replies: Comment[];
}

export interface Post {
  id: number;
  username: string;
  userAvatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}