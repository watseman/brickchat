// Sidebar.js
import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SidebarItem from './SidebarItem';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Sidebar = () => {
  // Placeholder icons and texts for the sidebar items
  const topItems = [
    { text: 'Profile', icon: <AccountBoxIcon/>},
    { text: 'Messages', icon: <MailIcon /> },
    { text: 'Grammar', icon: <LocalLibraryIcon />},
    { text: 'Favourites', icon: <BookmarksIcon />},
    // ... add other sidebar items here
  ];

  const bottomItems = [
    { text: 'Dashboard', icon: <InboxIcon /> },
    { text: 'Decks', icon: <BookmarksIcon />},

    

    // ... add other sidebar items here
  ];

  return (
    <div className="w-60 h-full bg-white flex-none">
      <List>
        {topItems.map((item, index) => (
          <SidebarItem key={index} text={item.text} icon={item.icon} path='/profile' />
        ))}
      </List>
      <Divider />
      <List>
        {bottomItems.map((item, index) => (
          <SidebarItem key={index} text={item.text} icon={item.icon} path='/' />
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
