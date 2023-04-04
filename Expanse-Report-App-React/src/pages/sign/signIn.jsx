import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createNotification } from "../../notificationService/notifications";
import React, { useContext } from 'react';
import {buttonContext} from "../../App";


const theme = createTheme();

const apiUrl_User="http://localhost:64059/api/User/VerifyUser"; 


export default function SignComponent(){

  const {visible,setVisible}= useContext(buttonContext);

  function verifyUser(user){
    fetch(apiUrl_User, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
    .then(res => {
      console.log('res=', res);
      return res.json()
    })
      .then(data => {
        console.log("fetch POST= ", data);
        if (data===1) {
          // User is verified
          
          localStorage.setItem("connectEmail", JSON.stringify(user.email));

          /*setTimeout(function() {
            window.location.href = "/home";
          }, 0.5); // 0.5 seconds */
          

          return true;
        } else {
          // User is not verified
          createNotification('error', 'Error adding expense to server!');

          return false;
        }
      })
      .catch(error => {
        console.error('Error verifying user:', error);
        return false;
      });
  }

 
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user={
      email: data.get('email'),
      password: data.get('password')
    }

    verifyUser(user);
    
    setVisible(true);
    
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>             
              <Grid item>
                <Link href="/sign_Up" variant="body2">            
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
      
    </ThemeProvider>
  );
}

