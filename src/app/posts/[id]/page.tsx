import { Box, Typography, Paper } from '@mui/material';
import React from 'react';
import axios from 'axios';
import Comments from '../../../components/comment';

interface Post {
  userId: number;
  id: number;
  title: string;
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
      <Comments comments={comments} />
    </Box>
  );
}

export default Page;