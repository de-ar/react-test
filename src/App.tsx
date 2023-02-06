// import React from 'react';

import Visibility from '@mui/icons-material/Visibility';
import { Avatar, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';  import Grid from '@mui/material/Grid';




// const App: React.FC = () => {

//   return (
//     <>
//       {/* <OutlinedInput
//         id="outlined-adornment-password"
//         type='text'
//         endAdornment={
//           <InputAdornment position="end">
//             <IconButton
//               aria-label="toggle password visibility"
//               onClick={() => { }}
//               onMouseDown={() => { }}
//               edge="end"
//             >
//               <Visibility />
//             </IconButton>
//           </InputAdornment>
//         }
//         label="Password"
//       />

//       <Avatar sx={{ width: 56, height: 56 }} /> */}

// <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//       </Grid>
//     </Box>

//     </>
//   )
// }

// export default App;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AppBar, Button, Link, TextField, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LogoImg from './assets/Group 1789.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function App() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        style={{ backgroundColor: "white" }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {/* <Grid container spacing={2}> */}
            {/* <Grid item xs={8}> */}
            <CloseIcon />
            <img src={LogoImg} alt="image not found" />
            {/* </Grid> */}
            {/* <Grid item xs={4}> */}
            {/* <h3>xs=4</h3> */}
            {/* </Grid> */}
            {/* </Grid> */}

          </Typography>
          <nav>

            <OutlinedInput
              id="outlined-adornment-password"
              type='text'
              placeholder='Search here...'
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => { }}
                    onMouseDown={() => { }}
                    edge="end"
                  >
                    {/* <Visibility /> */}
                    <SearchIcon />

                  </IconButton>
                </InputAdornment>
              }
            />

            <NotificationsIcon />

            Hi, John
          </nav>

          <Avatar>John</Avatar>
        </Toolbar>
      </AppBar>
    </>

  );
}
