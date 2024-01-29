import React from 'react';
import { Drawer, Box } from '@mui/material';
import Sidebar from '../generic/Sidebar';
import BRToolbar from '../generic/BRToolbar';

const drawerWidth = 240;
const toolbarHeight = 64; // Adjust this value based on your actual toolbar height

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* AppBar - Toolbar */}
      <BRToolbar />

      {/* Layout container */}
      <Box sx={{ display: 'flex', width: '100%', pt: `${toolbarHeight}px` }}>
        {/* Drawer - Sidebar */}
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
                overflow: 'hidden', // This will hide the scrollbar and disable scrolling
                },
            }}
            >
            <Sidebar />
            </Drawer>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
          margin={0}
          className='w-full'
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;

