export const dummyPosts = [
  {
    id: 1,
    username: "photography_master",
    userAvatar: "https://i.pravatar.cc/150?img=1",
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    timestamp: "2h ago",
    caption: "Chasing light in the mountains 🏔️ #adventure #photography",
    likes: 1234,
    comments: [
      {
        id: 1,
        username: "adventure_seeker",
        userAvatar: "https://i.pravatar.cc/150?img=2",
        text: "Incredible shot! The lighting is perfect. Where was this taken?",
        timestamp: "1h ago",
        likes: 24,
        replies: [
          {
            id: 2,
            username: "photography_master",
            userAvatar: "https://i.pravatar.cc/150?img=1",
            text: "Thanks! This was taken in the Dolomites, Italy during sunrise.",
            timestamp: "45m ago",
            likes: 8,
            replies: [
              {
                id: 3,
                username: "adventure_seeker",
                userAvatar: "https://i.pravatar.cc/150?img=2",
                text: "Adding this to my travel bucket list! 😍",
                timestamp: "30m ago",
                likes: 5,
              }
            ]
          }
        ]
      },
      {
        id: 4,
        username: "nature_lover",
        userAvatar: "https://i.pravatar.cc/150?img=3",
        text: "The composition is stunning! What camera setup did you use?",
        timestamp: "1h ago",
        likes: 15,
        replies: [
          {
            id: 5,
            username: "photography_master",
            userAvatar: "https://i.pravatar.cc/150?img=1",
            text: "Shot this on Sony A7IV with 16-35mm f/2.8 GM lens",
            timestamp: "55m ago",
            likes: 10,
          }
        ]
      }
    ]
  },
  {
    id: 2,
    username: "urban_explorer",
    userAvatar: "https://i.pravatar.cc/150?img=4",
    imageUrl: "https://images.unsplash.com/photo-1682686581362-796145f0e123",
    timestamp: "4h ago",
    caption: "City lights and urban nights 🌃 #cityscape #nightphotography",
    likes: 892,
    comments: [
      {
        id: 6,
        username: "city_wanderer",
        userAvatar: "https://i.pravatar.cc/150?img=5",
        text: "The mood in this shot is everything! 🔥",
        timestamp: "3h ago",
        likes: 45,
        replies: [
          {
            id: 7,
            username: "urban_explorer",
            userAvatar: "https://i.pravatar.cc/150?img=4",
            text: "Thank you! The rain really helped create that moody atmosphere",
            timestamp: "2h ago",
            likes: 12,
          }
        ]
      },
      {
        id: 8,
        username: "photo_critic",
        userAvatar: "https://i.pravatar.cc/150?img=6",
        text: "Love how you captured the reflections on the wet streets",
        timestamp: "2h ago",
        likes: 28,
      },
      {
        id: 9,
        username: "night_shooter",
        userAvatar: "https://i.pravatar.cc/150?img=7",
        text: "What settings did you use for this low light shot?",
        timestamp: "1h ago",
        likes: 19,
        replies: [
          {
            id: 10,
            username: "urban_explorer",
            userAvatar: "https://i.pravatar.cc/150?img=4",
            text: "ISO 1600, f/2.8, 1/60s with some noise reduction in post",
            timestamp: "45m ago",
            likes: 8,
            replies: [
              {
                id: 11,
                username: "night_shooter",
                userAvatar: "https://i.pravatar.cc/150?img=7",
                text: "Thanks for sharing! The results are fantastic",
                timestamp: "30m ago",
                likes: 4,
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    username: "minimal_shots",
    userAvatar: "https://i.pravatar.cc/150?img=8",
    imageUrl: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1",
    timestamp: "6h ago",
    caption: "Simplicity is the ultimate sophistication ⚪ #minimalism #architecture",
    likes: 1567,
    comments: [
      {
        id: 12,
        username: "design_buff",
        userAvatar: "https://i.pravatar.cc/150?img=9",
        text: "This is pure perfection! The lines, the symmetry... 👌",
        timestamp: "5h ago",
        likes: 67,
        replies: [
          {
            id: 13,
            username: "minimal_shots",
            userAvatar: "https://i.pravatar.cc/150?img=8",
            text: "Appreciate it! Took quite a while to find the right angle",
            timestamp: "4h ago",
            likes: 23,
          }
        ]
      },
      {
        id: 14,
        username: "arch_lover",
        userAvatar: "https://i.pravatar.cc/150?img=10",
        text: "Where is this beautiful building located?",
        timestamp: "4h ago",
        likes: 31,
        replies: [
          {
            id: 15,
            username: "minimal_shots",
            userAvatar: "https://i.pravatar.cc/150?img=8",
            text: "This is the new contemporary art museum in Tokyo",
            timestamp: "3h ago",
            likes: 15,
            replies: [
              {
                id: 16,
                username: "tokyo_fan",
                userAvatar: "https://i.pravatar.cc/150?img=11",
                text: "I was there last week! Such an amazing space",
                timestamp: "2h ago",
                likes: 8,
              }
            ]
          }
        ]
      }
    ]
  }
];
