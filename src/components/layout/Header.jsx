
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Group, Notifications, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Suspense, useState } from 'react';
// const 

const Header = () => {
  const [state, setState] = useState({
    isMobile: false,
    search: false,
    newGroup: false,
    notification: false,
  });

  const navigate = useNavigate();

  const toggleState = (key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, height: '4rem' }}>
        <AppBar sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
              ChitChat
            </Typography>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={() => toggleState('isMobile')}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Tooltip title="Search">
                <IconButton
                  sx={{ borderRadius: '5px', ':hover': { backgroundColor: 'mainColor' }, mx: '10px' }}
                  color="inherit"
                  size="medium"
                  onClick={() => toggleState('search')}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Manage Groups">
                <IconButton
                  sx={{ borderRadius: '5px', ':hover': { backgroundColor: 'mainColor' }, mx: '10px' }}
                  color="inherit"
                  size="medium"
                  onClick={() => navigate('/groups')}
                >
                  <Group />
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications">
                <IconButton
                  sx={{ borderRadius: '5px', ':hover': { backgroundColor: 'mainColor' }, mx: '10px' }}
                  color="inherit"
                  size="medium"
                  onClick={() => toggleState('notification')}
                >
                  <Notifications />
                </IconButton>
              </Tooltip>
              <Tooltip title="Log Out">
                <IconButton
                  sx={{ borderRadius: '5px', ':hover': { backgroundColor: 'mainColor' }, mx: '10px' }}
                  color="inherit"
                  size="medium"
                  onClick={() => toggleState('newGroup')}
                >
                  <Logout />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* {state.search && (
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
      )} */}
    </>
  );
};

export default Header