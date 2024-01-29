import React, { useState, FormEvent } from 'react';
import { TextField, Button, Typography, Paper } from "@mui/material";
import { Commentype } from './Profile';



interface ProfileCommentFormProps {
  onCommentSubmit: (comment: Commentype) => void;
}

const ProfileCommentForm: React.FC<ProfileCommentFormProps> = ({ onCommentSubmit }) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newComment: Commentype = {
      id:title+Date.now(), // Unique ID based on title and current timestamp
      title:title,
      timestamp: Date.now(),
      body:body
    };
    onCommentSubmit(newComment);
    // Reset form fields after submission
    setTitle('');
    setBody('');
  };

  return (
    <Paper className="p-4 rounded-lg shadow">
      <Typography variant="h6" className="mb-4">Share the word</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          margin="normal"
          variant="outlined"
          className="mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          label="Body"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          className="mb-4"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary"
          className="w-full"
          type="submit"
          sx={{
            mt: 3, mb: 2, backgroundColor: "#a2798f", borderColor: "#ffdae9", color: "white",
            '&:hover': {
              backgroundColor: '#ffdae9', // Replace 'desiredHoverColor' with the color code you want
              // borderColor: 'optionalBorderColorForHover', // Optional: if you want to change the border color on hover
            }
          }}
        >
          Submit Comment
        </Button>
      </form>
    </Paper>
  );
};

export default ProfileCommentForm;
