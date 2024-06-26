
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { useState } from 'react';
import sideImage from "../assets/Images/Untitled design.png"
import SignUp from './SignUp';
import { useForm } from 'react-hook-form';




function Login() {

    const [isLogin, setLogin] = useState(true);
    const handelLogin = () => setLogin((prv) => !prv)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (

        <Grid container display={"flex"} height={"100vh"}>
            <Grid item xs={7} sx={{
                display: {
                    xs: "none", md: "block",
                    backgroundImage: `url(${sideImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",

                }
            }}>

            </Grid>

            <Grid item xs={12} md={5} sx={{
                overflowY: "scroll",
                height: "100%",
            }}>
                <Container component={"main"} maxWidth="xs" sx={{ padding: "3rem", display: "flex", flexDirection: "column" }} >
                    <Typography variant='h5' sx={{ fontSize: "25px", fontWeight: "600" }}>Welcome to <div style={{ fontSize: "35px", fontWeight: "700", color: "#f84992" }}>ChitChat</div></Typography>
                    {
                        isLogin ? (
                            <>
                                <Typography variant="h5" sx={{
                                    marginTop: "1rem",
                                    fontWeight: "600",
                                    width: "100%"
                                }}>
                                    Login to your account
                                </Typography>
                                <form style={{ width: "100%" }}
                                    onSubmit={handleSubmit((data) => {
                                        console.log(data)
                                    })}
                                >
                                    <TextField
                                        id=""
                                        label="UserName"
                                        fullWidth
                                        sx={{
                                            marginTop: "15px",
                                        }}
                                        {
                                        ...register("username", { required: "username is required" })
                                        }

                                    />
                                    {errors.username && <div style={{ color: "#F84992" }}>
                                        {errors.username.message}
                                    </div>}
                                    <TextField
                                        id=""
                                        label="Password"
                                        fullWidth
                                        sx={{
                                            marginTop: "15px",
                                        }}
                                        type='password'
                                        {
                                        ...register("password", { required: "password is required" })
                                        }
                                    />
                                    {errors.password && <div style={{ color: "#F84992" }}>
                                        {errors.password.message}
                                    </div>}

                                    <Button
                                        sx={{
                                            marginTop: "3rem",
                                            bgcolor: "#f84992",
                                            ":hover": {
                                                bgcolor: "#f84992"
                                            }
                                        }}
                                        fullWidth
                                        type="submit"
                                        variant="contained"

                                    >Login</Button>
                                    <Typography sx={{
                                        color: "#797C8B",
                                        marginTop: "10px"
                                    }}>
                                        Don`t  have a account? <span onClick={() => handelLogin()} style={{ color: "#F84992", fontWeight: "600", cursor: "pointer" }}>Sign up</span>
                                    </Typography>

                                </form>
                            </>
                        ) : (
                            <SignUp handelLogin={handelLogin} />
                        )
                    }

                </Container>




            </Grid>

        </Grid>






    )
}

export default Login
