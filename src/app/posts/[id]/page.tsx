import { Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper, Divider } from '@mui/material';
import React from 'react';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Page = async ({ params }: { params: { id: string; }; }) => {
  const postResponse = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = postResponse.data;

  const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`);
  const comments = commentsResponse.data;

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', my: 4, p: 2 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Post {params.id}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {post.body}
        </Typography>
      </Paper>
      <Box>
        <Typography variant="h5" component="h3" gutterBottom>
          Comments
        </Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper', p: 2, borderRadius: 1 }}>
          {comments.map((comment: Comment) => (
            <React.Fragment key={comment.id}>
              <ListItem alignItems="flex-start" sx={{ mb: 2 }}>
                <ListItemAvatar>
                  <Avatar>{comment.name[0].toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={comment.name}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {comment.email}
                      </Typography>
                      {" — " + comment.body}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Page;
