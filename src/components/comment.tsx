import { Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper, Divider } from '@mui/material';
import React from 'react';



interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <Box>
      <Typography variant="h5" component="h3" gutterBottom>
        Comments
      </Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper', p: 2, borderRadius: 1 }}>
        {comments.map((comment: Comment) => (
          <React.Fragment key={comment.id}>
            <ListItem alignItems="flex-start" sx={{ mb: 2 }}>
              <ListItemAvatar>
                <Avatar alt='avatar'>{comment.name[0].toUpperCase()}</Avatar>
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
  );
};

export default Comments;