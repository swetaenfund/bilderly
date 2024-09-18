import React, { useState } from "react";
import { Paper, Typography, Box, TextField, Button, Grid } from "@mui/material";

const ChatArea = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (!userInput) return;

    // Add the user message to the messages array
    setMessages([...messages, { sender: 'user', text: userInput }]);

    // Simulate AI response after a delay
    const aiResponse = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { sender: 'ai', text: aiResponse }]);
    }, 1000);

    setUserInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Send message on Enter key, not Shift+Enter
      e.preventDefault(); // Prevent the default behavior of adding a newline
      handleSend();
    }
  };

  return (
    <Grid container sx={{ flexGrow: 1, width: "100%", height: "100%" }}>
      {/* Left Spacer - 2/12 width */}
      <Grid item xs={2}>
      </Grid>

      {/* Chat Area - 8/12 width */}
      <Grid item xs={8}>
        <Paper
          elevation={0}
          sx={{
            height: "80%",
            overflowY: "auto",
            padding: "10px",
            backgroundColor: "#FFFFFF",
            marginBottom: "10px",
            borderRadius: "0", // No rounded corners
          }}
        >
          {/* Display messages */}
          {messages.map((msg, index) => (
            <Box key={index} sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '10px 0' }}>
              <Typography sx={{
                display: 'inline-block',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: msg.sender === 'user' ? '#FFD369' : '#f1f1f1',
                color: msg.sender === 'user' ? '#222831' : '#000',
              }}>
                {msg.text}
              </Typography>
            </Box>
          ))}
        </Paper>

        {/* Chat Input */}
        <Box sx={{ display: "flex", gap: "10px", marginTop: "auto", padding: 0, margin: 0 }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Type a message"
            value={userInput}
             
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown} // Handle Enter key press
            InputProps={{
              sx: {
                height: "45px",
                paddingLeft : "10px"// Padding to the right for input text
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: "14px", // Smaller font size
                color: "#B0BEC5", // Lighter label color
                paddingLeft: "10px",
                top: "50%", // Position label in the middle initially
                transform: "translateY(-50%)", // Center it vertically
                "&.MuiInputLabel-shrink": {
                  display: "none", // Hide the label when it shrinks (focused or typing)
                  
                },
              },
            }}
            sx={{
              backgroundColor: "#F1F4F8",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E0E0E0", // Light grey outline
                },
                "&:hover fieldset": {
                  borderColor: "#B0BEC5", // Darker grey on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#B0BEC5", // Focus border color
                },
                "& .MuiOutlinedInput-input": {
                  paddingRight: "10px", // Padding for input text
                },
              },
            }}
          />
          <Button variant="contained" onClick={handleSend} sx={{
              height: "45px",
              backgroundColor: "#222831",
            }}>
            Send
          </Button>
        </Box>
      </Grid>

      {/* Right Spacer - 2/12 width */}
      <Grid item xs={2}>
      </Grid>
    </Grid>
  );
};

export default ChatArea;
