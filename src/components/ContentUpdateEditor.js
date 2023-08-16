import { Box, IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import {BiMessageSquareAdd} from "react-icons/bi";

const ContentUpdateEditor = (props) => {
  const [content, setContent] = useState(props.originalContent);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = e.target.content.value;
    let error = null;

    if (props.validate) {
      error = props.validate(content);
    }

    if (error && error.length !== 0) {
      setError(error);
    } else {
      props.handleSubmit(e);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{display: 'flex', flexGrow: 1, p: 2}}>
        <TextField
          value={content}
          fullWidth
          margin="normal"
          name="content"
          onChange={handleChange}
          error={error.length !== 0}
          helperText={error}
          multiline
        />
        <IconButton type="submit">
              <BiMessageSquareAdd />
         </IconButton>
    </Box>
  );
};

export default ContentUpdateEditor;