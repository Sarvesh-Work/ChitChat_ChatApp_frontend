import {styled } from "@mui/material";

export const VisuallyHiddenInput=styled("input")({
 clipPath:"rect(0 0 0 0)",
 padding:0,
 position:"absolute",
})

export const SearchBox=styled("input")({
    width:"100%",
    position:"relative",
    padding:"10px",
    borderRadius:"20px",
    border:'1px solid #C1C8C7',
    outline:"none",
    fontSize:"13px",
    textDecoration:"none"
})

