import React from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

const ChatArea = ({ messages, userInput, setUserInput, handleSend }) => (
  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#222831',
        padding: '20px',
        overflow: 'hidden',
      }}
    >
      <Typography variant="h4" gutterBottom color="#FFD369">Tell Us</Typography>

      {/* Chat Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: '10px',
          backgroundColor: '#F1F4F8',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      >
        {messages.map((msg, index) => (
          <Box key={index} sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '10px 0' }}>
            <Typography
              variant="body1"
              sx={{
                display: 'inline-block',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: msg.sender === 'user' ? '#FFD369' : '#f1f1f1',
                color: msg.sender === 'user' ? '#222831' : '#000',
              }}
            >
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Input and Button */}
      <Grid container spacing={2} mt={2} alignItems="stretch">
        <Grid item xs={10}>
          <TextField
            fullWidth
            variant="outlined"
            label="Type your message"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            InputLabelProps={{
              style: { color: '#000000' }, // White label color
            }}
            InputProps={{
              style: { backgroundColor: '#F1F4F8' }, // Background color for input field
            }}
            sx={{ height: '100%' }} // Ensure the text field takes the full height
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSend}
            sx={{
              height: '100%', // Matches the height of the text field
              backgroundColor: '#FFD369',
              color: '#222831',
              '&:hover': {
                backgroundColor: '#FFCD3C',
              },
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default ChatArea;
