import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../../Components/Header";

export default function Contacts() {
  const theme = useTheme();

  

  return (
    <Box style={{ height: 650, width: "90%", margin: "auto" }}>

      <Header title={"CONTACTS"} icon={''} subTitle={"List of Contacts for Future Reference"}/>
      
      
        <DataGrid
        slots={{ toolbar: GridToolbar }} 
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
  );
}
