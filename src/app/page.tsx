import axios from "axios";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  const posts = response.data;

  return (
    <main>
      <Box sx={{ width: '100%', p: 4, bgcolor: '#f3f4f6' }}>
        <Box sx={{ maxWidth: 800, mx: 'auto', my: 4 }}>
          {posts.map((post: Post, index: number) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                mb: 3,
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6,
                },
              }}
            >
              <Link href={`/posts/${post.userId}`}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="h5" component="div" sx={{ fontFamily: 'Lora, serif' }}>
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
                  </Typography>
                </Box>
              </Link>
            </Card>
          ))}
        </Box>
      </Box>
    </main>
  );
}
