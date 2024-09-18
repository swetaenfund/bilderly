import React, { useState } from 'react';
import { Box, Typography, IconButton, Avatar, Menu, MenuItem, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For navigation

const PreviewPanel = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Navigation hook for redirecting to different pages

  // Handle Profile Menu Open/Close
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/');
  };

  // Function to handle navigation to settings page
  const handleSettings = () => {
    handleMenuClose(); // Close the menu
    navigate('/settings'); // Navigate to settings page
  };

  return (
    <Box
      sx={{
        width: '300px',
        backgroundColor: '#222831',
        color: '#FFD369',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full height for the preview panel
      }}
    >
      {/* Header Section: Profile and Preview Title in the same row */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        {/* Preview Title */}
        <Typography variant="h6" gutterBottom>
          Preview Panel
        </Typography>

        {/* Profile Icon with Menu */}
        <IconButton onClick={handleMenuOpen} color="inherit">
          <Avatar sx={{ bgcolor: '#FFD369' }}>P</Avatar> {/* Profile Icon */}
        </IconButton>
        
        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleSettings}>Settings</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>

      {/* Divider after the header */}
      <Divider sx={{ borderColor: '#FFD369' }} />

      {/* Content Section */}
      <Box sx={{ flex: 1, marginTop: '20px' }}> {/* Pushes the content below the header */}
        <Typography variant="body2">
          Preview content goes here...
        </Typography>
      </Box>
    </Box>
  );
};

export default PreviewPanel;
