// SidebarItem.js
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ReactElement; // This is the type for MUI icons
  text: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, path }) => {
  return (
    <ListItem className="hover:bg-gray-200">
      <ListItemIcon><Link to={path}>{icon}</Link></ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default SidebarItem
