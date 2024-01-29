import { Card, CardContent, Typography, Alert, TextField, Button } from '@mui/material'
import React, { FormEvent, useRef, useState } from 'react'

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import GoogleButton from 'react-google-button';
import GoogleSignInButton from './GoogleSignIn';

type Props = {}

export default function Login({}: Props) {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate(); 

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { login, signinwithgoogle } = useAuth();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log()

        // Check if refs are not null
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        
        console.log("email: " + email)
        console.log("password: " + password)
        if (!email && !password) {
            setError("Please enter both email and password.");
            return;
        }

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            
            //redirect to dashboard
            navigate("/")

        } catch (error) {
            setError("Failed to log in.");
            console.error(error); // For debugging purposes
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className="flex justify-center items-center h-screen">
            <Card>
                <CardContent>
                    <Typography component="div">
                       
                        <h2 className='text-center mb-4'>Login In</h2>
                        <form onSubmit={handleSubmit}>

                            <TextField
                                inputRef={emailRef}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                inputRef={passwordRef}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={loading}
                            >
                                Log-in
                            </Button>

                            <div className="flex justify-center mb-4">
                                <GoogleSignInButton></GoogleSignInButton>
                            </div>
                        </form>
                        <div 
                        className='text-center mt-2 '>
                            Need an account? 

                            <Link 
                                className='ml-2 underline' 
                                to="/signup">Sign up
                            </Link>
                            
                            <div></div>


                        </div>

                    </Typography>
                </CardContent>
            </Card>
        </div>
  )
}