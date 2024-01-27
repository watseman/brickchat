import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

export default function BRToolbar() {

  const {logout} = useAuth();
  const {currentUser} = useAuth();
  const [error, setError] = useState<string>("");
  const [auth, setAuth] = React.useState(true);
  const navigate = useNavigate(); 
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogout(): void {
    setError('');
    logout();
    navigate("/login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
      </FormGroup>
      <AppBar position="static"  sx={{ backgroundColor: 		"#a2798f"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Search"
            name="search"
            autoComplete="search"
            autoFocus
            size="small" // Set the size to small
          />
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link className='m-5' to={"/profile"}>Profile</Link></MenuItem>
                {currentUser ? <MenuItem onClick={handleLogout}>Logout</MenuItem>: <Link className='m-5' to={"/login"}>Login</Link>}
                
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}