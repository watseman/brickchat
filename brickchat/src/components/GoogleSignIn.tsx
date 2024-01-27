import React from 'react'; // Adjust the import path as necessary
import GoogleButton from 'react-google-button';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const GoogleSignInButton = () => {
  const { signinwithgoogle } = useAuth();
  const navigate = useNavigate(); 
  const handleGoogleSignIn = async () => {
    try {
      await signinwithgoogle();
      // Handle successful sign-in here, like redirecting to a dashboard page
    } catch (error) {
      console.error("Error signing in with Google", error);
      // Handle errors here, like showing an error message
    }try{
        navigate("/")
    }catch(error){
        console.log(error)
    }

    
  };

  return (
    <GoogleButton onClick={handleGoogleSignIn}>
      Sign in with Google
    </GoogleButton>
  );
};

export default GoogleSignInButton;
