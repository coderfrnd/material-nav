import React, { useState } from 'react';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Button, Typography, TextField, AppBar, Toolbar, Grid, Tab, Tabs, Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { DrawerCa } from './DrawerCa';

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const linkarray = ["Home", "Product", "Service", "About"];

  return (
    <AppBar sx={{ backgroundImage: "linear-gradient(90deg, rgba(0,29,36,0.9304971988795518) 0%, rgba(9,60,121,0.9669117647058824) 35%, rgba(0,142,255,0.8632703081232493) 100%);" }}>
      <Toolbar>
        {isSmallScreen ?
        <>
         <Typography>
              <AddReactionIcon></AddReactionIcon>
              </Typography>
        
        <DrawerCa />
        </>
         : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
              <AddReactionIcon></AddReactionIcon>
              </Typography>
              
            </Grid>
            <Grid item xs={6}>
              <Tabs value={value} indicatorColor='secondary' textColor='inherit' onChange={handleChange}>
                {linkarray.map((linkarray, index) => (
                  <Tab
                    key={index}
                    label={linkarray}
                  />
                ))}
                <Tab />
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display="flex">
                <Button sx={{ marginLeft: "auto", background: "rgba(0,29,36,0.9304971988795518)" }} variant='contained'>Login</Button>
                <Button sx={{ marginLeft: 1, background: "rgba(0,29,36,0.9304971988795518)" }} variant='contained'>Sign-UP</Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default App;
