import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { AccountCircle, Menu as MenuIcon, Search } from '@mui/icons-material';
import { TextField, Box, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';

const drawerWidth = 240; // Adjust this to match your sidebar width

export default function BRToolbar() {
  const { logout, currentUser } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch {
      // Handle errors if logout fails
    }
  };

  // Customized TextField using MUI's styled API
  const CustomTextField = styled(TextField)(({ theme }) => ({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray',
      },
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#ffffff" , borderBlockColor: "gray"}}>
        <Toolbar>
          {/* Menu Icon Button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Search className='text-gray-500'/>
          </IconButton>

          {/* Customized Search TextField */}
          <CustomTextField
            margin="normal"
            fullWidth
            id="search"
            name="search"
            autoComplete="search"
            autoFocus
            size="small"
            sx={{ flex: 1 }} // Allow the search bar to take up as much space as possible
          />

          {/* Profile and Menu */}
          {currentUser && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle className='text-gray-500' />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to={"/profile"}>Profile</Link></MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {/* The following empty Toolbar is for offsetting content below the AppBar */}
      <Toolbar />
    </Box>
  );
}
