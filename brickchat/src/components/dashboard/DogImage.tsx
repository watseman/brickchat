import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { DogData, useDogApi } from '../../hooks/useDog';
import { Card, CardContent, Typography, Button } from '@mui/material';

type Props = {}


export default function DogImage({}: Props) {
    const {dogData, dogLoading, dogError, getDog} = useDogApi();

    const [dog, setDog] = useState<string | null>();

    useEffect(() => {
        const fetchData = async () => {
            const dogURL = await getDog();
            if (dogURL) {
                setDog(dogURL.url);
            }
        };
    
        fetchData();
    }, []);


  const {currentUser} = useAuth();
  const {logout} = useAuth();
  const navigate = useNavigate(); 




  function handleNewDog() {
    const fetchData = async () => {
        const dogURL = await getDog();
        if (dogURL) {
            setDog(dogURL.url);
        }
    };

    fetchData();
  }

  return (
    <div className='bg-white shadow-lg rounded-lg m-4 p-4'>
    
    <Card className='bg-white shadow-lg rounded-lg m-4 p-4'>
      <CardContent>

    


        <Typography component="div">
          <h2 className='text-center mb-4'>Dog</h2>
          {dog && <img src={dog}></img>}
          <form>

            <Button
              onClick={handleNewDog}
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, backgroundColor: "#a2798f", borderColor: "#ffdae9", color: "white",
                '&:hover': {
                  backgroundColor: '#ffdae9', // Replace 'desiredHoverColor' with the color code you want
                  // borderColor: 'optionalBorderColorForHover', // Optional: if you want to change the border color on hover
                }
              }}
            >
              Generate
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