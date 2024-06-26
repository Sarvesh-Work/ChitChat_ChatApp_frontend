import { Avatar, Button, IconButton, Stack, TextField, Typography } from "@mui/material"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { VisuallyHiddenInput } from "../components/styles/StyleComponent";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PropTypes from "prop-types";
import { mainColor } from "../components/constants/constants";


function SignUp({ handleLogin }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [avatarPath, setAvatarPath] = useState("")

    const handelAvatar = (e) => {
        e.preventDefault()
        setAvatarPath(URL.createObjectURL(e.target.files[0]))

    }

    return (
        <>
            <Typography variant="h5" sx={{
                marginTop: "1rem",
                fontWeight: "600",
                width: "100%"
            }}>
                Create a new account
            </Typography>
            <label style={{ marginTop: "1rem", color: "#6E6E6E", fontSize: "20px" }}>Chose a profile photo </label>
            <Stack display={"flex"} position={"relative"} width={"10rem"} marginX={"auto"} marginY={"1rem"}>

                <Avatar sx={{
                    width: "10rem",
                    height: "10rem",
                }} src={avatarPath} />
                <IconButton sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    bgcolor: mainColor,
                    color: "white",
                    padding: "8px",
                    ":hover": {
                        color: mainColor,
                        bgcolor: "white"
                    }
                }} component="label">
                    <>
                        <VisuallyHiddenInput type="file"  {
                            ...register("Photo", {
                                required: "Photo is  required",
                                validate: (value) => value[0].size <= 5242880 || "Max size is 5mb"

                            })
                        } onChange={(e) => handelAvatar(e)} />
                        <CameraAltIcon />

                    </>
                </IconButton>


            </Stack>
            {errors.Photo && <div style={{ color: mainColor, textAlign: "center", padding: "5px" }}>
                {errors.Photo.message ? (errors.Photo.message) :
                    ("Max size is 5mb")
                }
            </div>
            }
            <form style={{ width: "100%" }} onSubmit={handleSubmit((data) => {

                console.log({ data })
            })}>
                <TextField
                    id=""
                    label="Name"
                    fullWidth
                    {
                    ...register("name", { required: "name is  required" })
                    }
                />
                {errors.name && <div style={{ color: mainColor }}>
                    {errors.name.message}
                </div>
                }
                <TextField
                    id=""
                    label="Username"
                    fullWidth
                    sx={{
                        marginTop: "15px",
                    }}
                    {
                    ...register("username", { required: "username is  required", pattern: { value: /^[a-zA-Z0-9]{6,}$/ } })
                    }

                />
                {errors.username && <div style={{ color: mainColor }}>
                    {errors.username.message ? (errors.username.message)

                        :
                        (<div>
                            - It allows lowercase letters (a-z). <br />
                            - It allows uppercase letters (A-Z). <br />
                            - It allows numbers (0-9). <br />
                            - It enforces a minimum length of 6 characters. <br />
                            - It does not allow special characters, spaces, or hyphens.
                        </div>)
                    }
                </div>

                }
                <TextField
                    id=""
                    label="Bio"
                    fullWidth
                    sx={{
                        marginTop: "10px",
                    }}
                    {
                    ...register("Bio", { required: "Bio is  required" })
                    }
                />
                {errors.Bio && <div style={{ color: mainColor }}>
                    {errors.Bio.message}
                </div>
                }
                <TextField
                    id=""
                    label="Password"
                    fullWidth
                    sx={{
                        marginTop: "15px",
                    }}
                    type='password'
                    {
                    ...register("password", { required: "password is required", pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm } })
                    }

                />
                {errors.password && <div style={{ color: mainColor }}>
                    {errors.password.message ? (errors.password.message)

                        :
                        (<div>
                            - at least 8 characters <br />
                            - must contain at least 1 uppercase letter <br />
                            - 1 lowercase letter, and 1 number <br />
                            - Can contain special characters No space in word <br />
                        </div>)
                    }
                </div>

                }

                <TextField
                    id=""
                    label="Conform password"
                    fullWidth
                    sx={{
                        marginTop: "15px",
                    }}
                    type='password'
                    {
                    ...register("ConformPassword", { required: "Conform password is required", validate: (value, formValue) => value == formValue.password || "password is not matching" })
                    }
                />
                {errors.ConformPassword && <div style={{ color: mainColor }}>
                    {errors.ConformPassword.message}
                </div>

                }

                <Button
                    sx={{
                        marginTop: "2rem",
                        bgcolor: mainColor,
                        "&:hover": {
                            bgcolor: mainColor
                        }
                    }}
                    fullWidth
                    type="submit"
                    variant="contained"


                >Sign up</Button>
                <Typography sx={{
                    color: "#797C8B",
                    marginTop: "10px"
                }}>
                    Already have an account? <span onClick={() => handleLogin()} style={{ color: mainColor, fontWeight: "600", cursor: "pointer" }}>Login</span>
                </Typography>

            </form>
        </>
    )
}

export default SignUp

SignUp.propTypes = {
    handleLogin: PropTypes.func
};