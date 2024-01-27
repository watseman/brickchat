import { Grid, Paper, Avatar, Typography, List } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import BRToolbar from "../dashboard/BRToolbar";

const Profile: React.FC = () => {

const {currentUser} = useAuth();

const defaultAvatarUrl = 'path_to_default_avatar_image.jpg';

  return (
    <>
      <BRToolbar />
      <div className="container mx-auto p-4">
        <Grid container spacing={3}>
          {/* User Information Section */}
          <Grid item xs={12} md={4}>
            <Paper className="p-4 rounded-lg shadow">
              <div className="flex flex-col items-center">
              <Avatar 
                  alt="Your Username" 
                  src={currentUser?.photoURL || defaultAvatarUrl} 
                  className="w-24 h-24 mb-4" 
                />
                <Typography variant="h5">{currentUser?.displayName}</Typography>
                <Typography variant="body1" color="textSecondary" className="mb-4">{currentUser?.email}</Typography>
                <Typography variant="body2">[Your Bio]</Typography>
              </div>
            </Paper>
          </Grid>

          {/* Additional Sections */}
          <Grid item xs={12} md={8}>
            <Paper className="p-4 rounded-lg shadow">
              {/* Favorite Photos Section */}
              <Typography variant="h6" className="mb-2">Favorite Photos</Typography>
              <Grid container spacing={2}>
                {/* Insert your favorite photos here */}
              </Grid>

              {/* Completed Activities Section */}
              <Typography variant="h6" className="mt-4 mb-2">Completed Activities</Typography>
              {/* Insert your completed activities here */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Profile;
