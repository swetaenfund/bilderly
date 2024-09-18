import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import HistoryPanel from '../components/HistoryPanel'; // Left Sidebar
import ChatArea from '../components/chatArea'; // Chat Area
import PreviewPanel from '../components/PreviewPanel'; // Right Sidebar

const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (!userInput) return;

    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);

    const aiResponse = "This is an AI-generated response.";
    setTimeout(() => {
      setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
    }, 1000);

    setUserInput('');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F1F4F8' }}>
      <HistoryPanel />
      <ChatArea messages={messages} setMessages={setMessages} userInput={userInput} setUserInput={setUserInput} handleSend={handleSend} />
      <PreviewPanel />
    </Box>
  );
};

export default HomePage;
