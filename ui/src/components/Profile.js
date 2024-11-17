import { useState } from 'react';
import {
  Box,
  Avatar,
  Typography,
  Grid,
  Tab,
  Tabs,
  ImageList,
  ImageListItem,
} from '@mui/material';

function Profile() {
  const [tabValue, setTabValue] = useState(0);

  const user = {
    username: 'user123',
    avatar: 'https://via.placeholder.com/150',
    posts: 42,
    followers: 1234,
    following: 567,
    bio: 'This is a sample bio',
    images: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
    ]
  };

  return (
    <Box sx={{ maxWidth: 935, mx: 'auto', p: 3 }}>
      <Box sx={{ display: 'flex', mb: 4 }}>
        <Avatar
          sx={{ width: 150, height: 150, mr: 4 }}
          src={user.avatar}
        />
        <Box>
          <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
            {user.username}
          </Typography>
          <Grid container spacing={3} sx={{ mb: 2 }}>
            <Grid item>
              <Typography><strong>{user.posts}</strong> posts</Typography>
            </Grid>
            <Grid item>
              <Typography><strong>{user.followers}</strong> followers</Typography>
            </Grid>
            <Grid item>
              <Typography><strong>{user.following}</strong> following</Typography>
            </Grid>
          </Grid>
          <Typography>{user.bio}</Typography>
        </Box>
      </Box>

      <Tabs
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        centered
        sx={{ mb: 2 }}
      >
        <Tab label="Posts" />
        <Tab label="Saved" />
      </Tabs>

      <ImageList cols={3} gap={16}>
        {user.images.map((img, index) => (
          <ImageListItem key={index}>
            <img
              src={img}
              alt={`Post ${index + 1}`}
              loading="lazy"
              style={{ aspectRatio: '1', objectFit: 'cover' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default Profile;
