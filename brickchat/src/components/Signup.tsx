import React, { useRef, useState } from 'react';
import { Alert, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Signup() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { signup } = useAuth();

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
            await signup(email, password);
        } catch (error) {
            setError("Failed to create an account.");
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
                        <h2 className='text-center mb-4'>Sign Up</h2>
                        {error && <Alert severity="error">{error}</Alert>}
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
                                Submit
                            </Button>
                        </form>
                        <div className='text-center mt-2'>
                            Already have an account? <Link className='underline' to={"/login"}>Login</Link>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
