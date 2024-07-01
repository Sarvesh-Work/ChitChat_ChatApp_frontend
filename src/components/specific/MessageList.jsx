import { Box, IconButton, Stack, Typography} from "@mui/material"

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { SearchBox } from "../styles/StyleComponent";




function MessageList() {
  return (
    <Stack>
      <Box sx={{
        px: "10px",
        py: "5px"
      }} display={"flex"} justifyContent={"space-between"}>
        <Typography sx={{
          fontSize: "20px",
          fontWeight: "600"
        }} >
          Messages
        </Typography>
        <IconButton size="small" sx={{display:{lg:"none",xs:"block"}}}>
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <Box sx={{
        px: "10px",
        py: "5px"
      }} display={"flex"} justifyContent={"space-between"}>
         
         <SearchBox type="search" placeholder="Search..."/>
      </Box>
    </Stack>
   
  )
}

export default MessageList