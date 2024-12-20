import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function NotFound() {
  const theme = useTheme();
  return (
    <Box>
      <Typography align="center" color={theme.palette.error.main} variant="h5" component="h2">
        There is no design yet
        <br />
        <br />
        Please try again later...
      </Typography>
    </Box>
  );
}
