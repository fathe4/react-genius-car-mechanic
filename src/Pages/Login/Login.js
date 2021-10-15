import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <Button onClick={googleSignIn} variant="warning">
                Sign in with google
            </Button>
        </div>
    );
};

export default Login;