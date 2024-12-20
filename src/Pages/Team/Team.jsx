import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../Components/Header";

export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      width: 33,
      headerName: "ID",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      width: 33,
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              m: "7px",
              p:"2px",
              width: "99px",
              borderRadius: "5px",
              textAlign: "center",
              mx: "auto",
              display:"flex",
              backgroundColor: access==="Manager" ? theme.palette.primary.dark : access==="Admin" ? theme.palette.secondary.dark :theme.palette.info.light ,
            }}
          >
            {access==="Manager"&&<SecurityOutlinedIcon fontSize="small" sx={{mt:"7px" ,color:"#fff"}}/>}
            {access==="Admin"&&<AdminPanelSettingsOutlinedIcon fontSize="small" sx={{mt:"7px" ,color:"#fff"}}/>}
            {access==="User"&&<LockOutlinedIcon fontSize="small" sx={{mt:"7px" ,color:"#fff"}}/>}
            
            <Typography sx={{m:"8px" ,fontSize:"13px" ,color:"#fff"}} variant="body1">{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
      <Box style={{ height: 600, width: "90%", margin: "auto" }}>

<Header title={"TEAM"} icon={''} subTitle={"Managing the team members"}/>



        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
  );
}
