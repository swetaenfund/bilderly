import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; // For navigation


export default function ButtonAppBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#f5f5f5' }}>
        <Toolbar style={{color : "##222831"}}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 , color : "##222831"}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:"#222831"}}>
            Bilderly
          </Typography>
          <Button color="#222831" onClick={handleLogout} sx={{color:"#222831"}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
