import React from 'react'; // Adjust the import path as necessary
import GoogleButton from 'react-google-button';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const GoogleSignInButton = () => {
  const { signinwithgoogle } = useAuth();
  const handleGoogleSignIn = async () => {
    signinwithgoogle()
    
  };

  return (
    <GoogleButton onClick={handleGoogleSignIn}>
      Sign in with Google
    </GoogleButton>
  );
};

export default GoogleSignInButton;
