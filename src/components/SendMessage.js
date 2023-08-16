  import { IconButton, Stack, TextField,} from "@mui/material";
  import React, { useEffect, useState } from "react";

  import { sendMessage } from "../api/messages";
  import { isLoggedIn } from "../helpers/authHelper";
  import HorizontalStack from "./util/HorizontalStack";
  import {BsFillArrowRightSquareFill} from "react-icons/bs";
  
  const SendMessage = (props) => {
    const [content, setContent] = useState("");
  
    const handleSendMessage = () => {
      props.onSendMessage(content);
      setContent("");
    };
  
    return (
      <Stack
        sx={{
          m: 2,
          height: "40px",
        }}
        justifyContent="center"
      >
        <HorizontalStack>
          <TextField
            onChange={(e) => setContent(e.target.value)}
            placeholder="Send a message..."
            fullWidth
            value={content}
            autoComplete="off"
            size="small"
            onKeyPress={(e) => {
              if (e.key === "Enter" && content.length > 0) {
                handleSendMessage();
              }
            }}
          />
  
          <IconButton onClick={handleSendMessage} disabled={content.length === 0}>
            <BsFillArrowRightSquareFill />
          </IconButton>
        </HorizontalStack>
      </Stack>
    );
  };
  
  export default SendMessage;