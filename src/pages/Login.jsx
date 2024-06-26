
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { useState } from 'react';
import sideImage from "../assets/Images/Untitled design.png"
import SignUp from './SignUp';
import { useForm } from 'react-hook-form';
import { mainColor } from '../components/constants/constants';


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const handleLoginToggle = () => setIsLogin((prev) => !prev);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Grid container style={{ height: '100vh', display: 'flex' }}>
            <Grid item xs={7} md={7} style={{
                display: { xs: 'none', md: 'block' },
                backgroundImage: `url(${sideImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
            </Grid>

            <Grid item xs={12} md={5} style={{ overflowY: 'scroll', height: '100%' }}>
                <Container component="main" maxWidth="xs" style={{ padding: '3rem', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h5' style={{ fontSize: '25px', fontWeight: 600 }}>
                        Welcome to
                        <div style={{ fontSize: '35px', fontWeight: 700, color: mainColor }}>
                            ChitChat
                        </div>
                    </Typography>

                    {isLogin ? (
                        <>
                            <Typography variant="h5" style={{ marginTop: '1rem', fontWeight: 600, width: '100%' }}>
                                Login to your account
                            </Typography>
                            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    label="Username"
                                    fullWidth
                                    style={{ marginTop: '15px' }}
                                    {...register("username", { required: "Username is required" })}
                                />
                                {errors.username && <div style={{ color: mainColor }}>{errors.username.message}</div>}

                                <TextField
                                    label="Password"
                                    fullWidth
                                    style={{ marginTop: '15px' }}
                                    type='password'
                                    {...register("password", { required: "Password is required" })}
                                />
                                {errors.password && <div style={{ color: mainColor }}>{errors.password.message}</div>}

                                <Button
                                    style={{ marginTop: '3rem', backgroundColor: mainColor }}
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    sx={{ ':hover': { backgroundColor: mainColor } }}
                                >
                                    Login
                                </Button>
                                <Typography style={{ color: '#797C8B', marginTop: '10px' }}>
                                    {`Don't have an account?`}
                                    <span onClick={handleLoginToggle} style={{ color: mainColor, fontWeight: 600, cursor: 'pointer' }}>
                                        Sign up
                                    </span>
                                </Typography>
                            </form>
                        </>
                    ) : (
                        <SignUp handleLogin={handleLoginToggle} />
                    )}
                </Container>
            </Grid>
        </Grid>
    );
};

export default Login;

