import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Dark Mode_______________

  const [myMode, setMyMode] = useState(
    Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: myMode,
    },
  });
  // ____________________
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* TopBar Component__________________ */}
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMyMode={setMyMode}
        />

        {/* SideBar component_________________ */}
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />

        {/*main content__________________  */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {/* Display all pages Outlet */}
          <Outlet />
          
        </Box>
      </Box>
    </ThemeProvider>
  );
}
