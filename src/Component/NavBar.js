import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import { Switch } from '@mui/material';





function ResponsiveAppBar() {

  const [mode,setMode] = React.useState('light');



  const colormode =  () => {
    const root = document.getElementById('root');
    const containertext = document.getElementById('containertext')
    

    if (mode === 'light') {
      root.style.backgroundColor = "white";
      root.style.color = "black";
      containertext.style.backgroundColor = "white";
      containertext.style.color = "black";
  
      setMode("dark");
      

    } else if (mode === 'dark') {
      root.style.backgroundColor = "black";
      root.style.color = "white";
      containertext.style.backgroundColor = "grey";
      containertext.style.color = "white";
      setMode("light")
      
    }
  }




  return (
    <>
    
    
    <AppBar  sx={{ top:"30px" }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Box sx={{display: { xs: 'none', md: 'flex' },}}>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.2rem',
              fontSmooth:"20px",
              color: 'red',
              textDecoration: 'none',
            }}
          >
            THE TIMES OF  
          </Typography>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              
             
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'ORANGE',
              textDecoration: 'none',
            }}
          >
              IN
          </Typography>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
            
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.2rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
              D
          </Typography>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.2rem',
              color: 'DARKGREEN',
              textDecoration: 'none',
            }}
          >  IA
              </Typography>
              


</Box>
   
          

          <Box sx={{ marginLeft:"50%", display:"flex"}}>
              <p style={{fontSize:"18px"}} >{mode === "dark" ? "Dark theme" : "Light theme"} </p>
            <Switch  color="default" sx={{marginTop:"10px"}} onClick={colormode} />
              
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      </>

  );
}
export default ResponsiveAppBar;