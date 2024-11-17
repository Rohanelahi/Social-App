export const MOCK_POSTS = [
  {
    id: 1,
    username: 'photography_master',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=800&fit=crop',
    caption: 'Capturing the perfect moment when light meets shadow. What do you think about this composition? 📸✨',
    likes: 1234,
    timestamp: '2h ago',
    comments: [
      {
        id: 1,
        username: 'artlover',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        content: 'The lighting in this shot is absolutely incredible! How did you achieve this effect?',
        likes: 23,
        timestamp: '1h ago',
        replies: [
          {
            id: 2,
            username: 'photography_master',
            userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
            content: 'Thank you! I used natural lighting during golden hour and positioned the subject carefully.',
            likes: 12,
            timestamp: '45m ago',
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    username: 'urban_explorer',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687221038-404670f09ef1?w=800&h=800&fit=crop',
    caption: 'Found this hidden gem in the heart of the city. Sometimes the best discoveries are right around the corner 🌆',
    likes: 856,
    timestamp: '4h ago',
    comments: [
      {
        id: 3,
        username: 'citylife',
        userAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop',
        content: 'This spot looks amazing! Where exactly is this?',
        likes: 15,
        timestamp: '3h ago',
        replies: [
          {
            id: 4,
            username: 'urban_explorer',
            userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
            content: 'It\'s in the old district, near the central park. I can DM you the exact location!',
            likes: 8,
            timestamp: '2h ago',
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 3,
    username: 'tech_enthusiast',
    userAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&h=800&fit=crop',
    caption: 'Just got my hands on the latest tech gadget! Let\'s discuss the future of AI and machine learning. What are your thoughts on recent developments? 🤖',
    likes: 1543,
    timestamp: '6h ago',
    comments: [
      {
        id: 5,
        username: 'ai_researcher',
        userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
        content: 'The advancement in natural language processing has been remarkable. Have you tried the new LLM models?',
        likes: 45,
        timestamp: '5h ago',
        replies: [
          {
            id: 6,
            username: 'tech_enthusiast',
            userAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop',
            content: 'Yes! The capabilities are mind-blowing. I\'ve been experimenting with different prompts and the results are incredible.',
            likes: 28,
            timestamp: '4h ago',
            replies: [
              {
                id: 7,
                username: 'data_scientist',
                userAvatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop',
                content: 'The prompt engineering aspect is fascinating. Would love to share some techniques I\'ve discovered!',
                likes: 19,
                timestamp: '3h ago',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  }
];