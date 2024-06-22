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
    <>
  <Box sx={{ maxWidth: 800, mx: 'auto', my: 4, p: 2, bgcolor: '#f3f4f6', fontFamily: 'Lora, serif' }}>
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" component="h1" gutterBottom sx={{ fontFamily: 'Lora, serif', fontWeight: 'bold', fontSize: '2.5rem' }}>
        Post {params.id}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom sx={{ fontFamily: 'Lora, serif', fontWeight: 'medium', fontSize: '1.75rem', color: '#333' }}>
        {post.title}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', lineHeight: 1.6 }}>
        {post.body}
      </Typography>
    </Paper>
  <Comments comments={comments} />
</Box>

    </>
  );
}

export default Page;