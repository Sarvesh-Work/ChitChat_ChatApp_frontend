

import { Add, Group, GroupAdd, Logout, Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Suspense, useState, lazy, } from 'react';

import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { mainColor } from "../constants/constants.js"

const Search = lazy(() => import("../specific/Search"))
const AddGroup = lazy(() => import("./../specific/AddGroup"))
const Notification = lazy(() => import("./../specific/Notification"))
import { Container } from '@mui/material';




const Header = () => {
  const [state, setState] = useState({
    selectNew: false,
    newGroup: false,
    manageGroup: false,
    notification: false,
  });

  const navigate = useNavigate();

  const toggleState = (key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const navigation = [
    { title: "Select New", toggle: "selectNew", icon: <Add /> },
    { title: "Manage Groups", toggle: "manageGroup", icon: <Group /> },
    { title: "Notification", toggle: "notification", icon: <Notifications /> },
    { title: "Create Group", toggle: "newGroup", icon: <GroupAdd /> },

  ]

  return (
    <>


      {state.selectNew && (
        <Suspense fallback={<div>Loading...</div>}>
          <Search />
        </Suspense>
      )}

      {state.newGroup && (
        <Suspense fallback={<div>Loading...</div>}>
          <AddGroup />
        </Suspense>
      )}

      {state.notification && (
        <Suspense fallback={<div>Loading...</div>}>
          <Notification />
        </Suspense>
      )}

      <Container maxWidth="xl" sx={{ height: "100%" }} >
        <Box color={"white"} height={"27%"} pt={"15px"}>
          <Tooltip title="Profile" placement='right'>
            <Avatar sx={{
              width: "100%",
              height: "60px",
              border: `2px solid ${mainColor}`
            }} />
          </Tooltip>
        </Box>

        <Box color={"white"} height={"calc(100% - 27%)"} mt={"0px"}>
          {
            navigation.map((data) => (
              <Box color={"white"} mb={"2rem"} key={data.title}>
                <Tooltip title={data.title} placement="right">
                  <IconButton
                    sx={{ borderRadius: '5px', ':hover': { backgroundColor: mainColor }, width: "100%" }}
                    color="inherit"
                    size="medium"
                    onClick={() => toggleState(data.toggle)}
                  >
                    {data.icon}
                  </IconButton>
                </Tooltip>
              </Box>
            ))
          }

          <Box color={"white"} mb={"2rem"}>
            <Tooltip title="Logout" placement="right">
              <IconButton
                sx={{ borderRadius: '5px', ':hover': { backgroundColor: mainColor }, width: "100%" }}
                color="inherit"
                size="medium"
                onClick={() => navigate("/login")}
              >
                <Logout />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

      </Container>

    </>
  );
};

export default Header