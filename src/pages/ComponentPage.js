import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import ButtonAppBar from "../components/Navigationbar";
import ChatArea from "../components/Chat.js"; // Import the new component

const FullScreenGridWithPaper = () => {
  return (
    <div style={{ overflowY: "hidden", overflowX: "hidden" }}>
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <ButtonAppBar />
        <Grid container sx={{ height: "100%", width: "100%" }}>
          {/* Left Spacer - 2/12 width */}

          <Grid item xs={12} sm={2}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: "0",
                overflowY: "auto", // Make it scrollable
                padding: "10px",
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: "10px", fontSize : "16px" }}  >
                History
              </Typography>
              {/* Mockup for chat history items */}
              <Box sx={{ width: "100%", textAlign: "left" }}>
                {/* Example history items */}
                <Paper
                  sx={{
                    marginBottom: "10px",
                    padding: "8px",
                    backgroundColor: "#FFF",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#e0e0e0", // Slightly darker on hover
                    },
                  }}
                  onClick={() => alert("Load previous chat 1")} // Add onClick to load the history
                >
                  <Typography variant="body2">Previous Chat 1</Typography>
                </Paper>
                <Paper
                  sx={{
                    marginBottom: "10px",
                    padding: "8px",
                    backgroundColor: "#FFF",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#e0e0e0", // Slightly darker on hover
                    },
                  }}
                  onClick={() => alert("Load previous chat 2")} // Add onClick to load the history
                >
                  <Typography variant="body2">Previous Chat 2</Typography>
                </Paper>
                {/* Add more chat history items as needed */}
              </Box>
            </Paper>
          </Grid>

          {/* Main Content - 8/12 width */}
          <Grid item xs={12} sm={10}>
            <Paper
              elevation={1}
              sx={{
                height: "100%",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                borderRadius: "0",
              }}
            >
              {/* Chat Area */}
              <ChatArea />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FullScreenGridWithPaper;
