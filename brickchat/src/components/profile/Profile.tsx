import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import ProfileCommentForm from "./Comment";
import { Grid, Paper, Avatar, Typography, Container } from "@mui/material";

import React from 'react'
import BRToolbar from "../generic/BRToolbar";
import DogImage from "../dashboard/DogImage";
import Sidebar from "../generic/Sidebar";


interface ProfileCommentFormProps {
  onCommentSubmit: (newComment: Commentype) => void;
}

export type Commentype = {
  id: string;
  title: string;
  timestamp: number;
  body: string;
};



function Profile() {

  
const {currentUser} = useAuth();


const defaultAvatarUrl = 'path_to_default_avatar_image.jpg';

const addComment = (newComment: Commentype) => {
  if(newComment.body && newComment.title){
  setComments(prevComments => [...prevComments, newComment]);
}
};


const [comments, setComments] = useState<Commentype[]>([]);

  return (
    <div className="w-full" > 
      <div className=" p-4 w-full">

          <Grid container>
            <Paper className="ml-0 p-4 rounded-lg m-4 w-full">
              <div className="flex flex-col items-center">
              <Avatar 
                  alt="Your Username" 
                  src={currentUser?.photoURL || defaultAvatarUrl} 
                  className="w-24 h-24 mb-4" 
                />
                <Typography variant="h5">{currentUser?.displayName}</Typography>
                <Typography variant="body1" color="textSecondary" className="mb-4">{currentUser?.email}</Typography>
                <Typography variant="body2"></Typography>
              </div>
            </Paper>
            
            <ProfileCommentForm onCommentSubmit={addComment} />
          </Grid>


        <Grid item xs={12}>
        {comments.map((comment, index) => (
            <Paper key={comment.id} className={`mb-4 m-4 ${index !== comments.length - 1 ? "mb-6" : ""} rounded-lg shadow`}>
              <div className="p-2"> {/* Reduced padding */}
              <Typography variant="body2" color="textSecondary" className="mb-2">
                  {new Date(comment.timestamp).toLocaleString()}
                </Typography>
                <Typography variant="h6" className="mb-2">{comment.title}</Typography>
                <Typography variant="body1">{comment.body}</Typography>
              </div>
            </Paper>
          ))}

        </Grid>
      </div>
    </div>
  );
};

export default Profile;
