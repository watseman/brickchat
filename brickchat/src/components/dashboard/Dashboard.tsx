import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent,Typography } from '@mui/material'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useActivityApi } from '../../hooks/useActivity';

type Props = {}

export default function Dashboard({}: Props) {
  const { activityData, activityLoading, getActivity } = useActivityApi();

  const [error, setError] = useState<string>("");
  const {currentUser} = useAuth();
  const {logout} = useAuth();
  const navigate = useNavigate(); 

  useEffect(() => {
    getActivity();
  },[])


  function handleLogout(): void {
    setError('');
    logout();
    navigate("/login");
  }


  return (
    <div className=''>
    <Card className='bg-white shadow-lg rounded-lg m-4 p-4'>
      <CardContent>
        <Typography component="div" className='ext-gray-800 text-lg mb-4'>
          <h2 className='text-center mb-4'>Activity for the day</h2>
          <h2 className='text-center mb-4'>{currentUser?.email}</h2>
          <h2 className='text-center mb-4'>{!activityLoading && activityData?.activity}</h2>
          <form>

            <Button
              onClick={getActivity}
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, backgroundColor: 	"#a2798f", borderColor: "#ffdae9", color: "white",
                '&:hover': {
                  backgroundColor: '#ffdae9', // Replace 'desiredHoverColor' with the color code you want
                  // borderColor: 'optionalBorderColorForHover', // Optional: if you want to change the border color on hover
                }
              }}
            >
              Generate
            </Button>

            <Button
              onClick={handleLogout}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, backgroundColor: "	#a2798f", borderColor: "#ffdae9", color: "white",
                '&:hover': {
                  backgroundColor: '#ffdae9', // Replace 'desiredHoverColor' with the color code you want
                  // borderColor: 'optionalBorderColorForHover', // Optional: if you want to change the border color on hover
                }
              }}   
            >
              Log out
            </Button>
          </form>
          <div 
          className='text-center mt-2 '>
              
          </div>
        </Typography>
      </CardContent>
    </Card>
  </div>
  )
}