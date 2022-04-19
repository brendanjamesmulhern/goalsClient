import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { signUp, login } from './service/service';

const AuthBody = ({ setAuth }) => {
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [error, setError] = React.useState(null);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = () => {
        signUp(email, password)
            .then(res => {
                if (res.status === 200) {
                    setAuth(email);
                } else {
                    setError(res.data);
                }
            })
            .catch(err => {
                setError(err.message);
            });
    };

    const handleLogin = () => {
        login(email, password)
            .then(res => {
                if (res.status === 200) {
                    setAuth(email);
                } else {
                    setError(res.data);
                }
            })
            .catch(err => {
                setError(err.message);
            });
    };

    return (
        <div style={{ flexDirection: 'column', height: '80vh', width: '80vw', display: 'flex', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                <Typography style={{ color: "white" }}>Email:</Typography>
                <TextField onChange={handleEmailChange} placeholder="Email" style={{ backgroundColor: "white" }}  type="email" />
                <Typography style={{ color: "white" }}>Password:</Typography>
                <TextField onChange={handlePasswordChange} placeholder="Password" style={{ backgroundColor: "white" }} type="password" />
                <Button onClick={handleSignUp} style={{ color: "white" }}>Login</Button>
                <Button onClick={handleLogin} style={{ color: "white" }}>Register</Button>
        </div>
    )
};

export default AuthBody;