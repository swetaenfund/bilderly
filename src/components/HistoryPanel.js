import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const HistoryPanel = () => (
  <Box
    sx={{
      width: '250px',
      backgroundColor: '#222831',
      color: '#FFD369',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Typography variant="h6">Side Panel</Typography>
    <Divider sx={{ my: 2, borderColor: '#FFD369' }} />
    <Typography variant="body2">Item 1</Typography>
    <Typography variant="body2">Item 2</Typography>
    <Typography variant="body2">Item 3</Typography>
  </Box>
);

export default HistoryPanel;
