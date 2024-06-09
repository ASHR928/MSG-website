"use client";

import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button, List, ListItem, ListItemText, CssBaseline, Drawer } from '@mui/material';

const Sidebar = () => {
//   const history = useHistory();

//   useEffect(() => {
//     const user = sessionStorage.getItem('user');
//     if (!user) {
//       history.push('/login');
//     }
//   }, [history]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button component="a" >
              <ListItemText primary="Add New Post" />
            </ListItem>
            <ListItem button component="a" >
              <ListItemText primary="View Website" />
            </ListItem>
            <ListItem button component="a" >
              <Button variant="contained" color="primary">
                Logout
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {/* Your main content goes here */}
      </Box>
    </Box>
  );
};

export default Sidebar;
