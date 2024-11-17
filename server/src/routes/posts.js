const router = require('express').Router();
const Post = require('../models/Post');
const auth = require('../middleware/auth');

// Create post
router.post('/', auth, async (req, res) => {
  try {
    const newPost = new Post({
      user: req.user._id,
      imageUrl: req.body.imageUrl,
      caption: req.body.caption
    });

    const savedPost = await newPost.save();
    await savedPost.populate('user', 'username avatar');
    
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('user', 'username avatar')
      .populate('comments.user', 'username avatar')
      .populate('comments.replies.user', 'username avatar')
      .sort({ createdAt: -1 });
    
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Like/Unlike post
router.post('/:id/like', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const likeIndex = post.likes.indexOf(req.user._id);
    if (likeIndex === -1) {
      post.likes.push(req.user._id);
    } else {
      post.likes.splice(likeIndex, 1);
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add comment
router.post('/:id/comment', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    post.comments.unshift({
      user: req.user._id,
      text: req.body.text
    });

    await post.save();
    await post.populate('comments.user', 'username avatar');
    
    res.json(post.comments[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;