import { Box, Typography, useTheme } from "@mui/material";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import MainGeography from "./MainGeography";
import Header from "../../Components/Header";

export default function Geography() {
  const theme = useTheme();
  return (
    <>
    
      <Header title={"Geography"} icon={<MapOutlinedIcon
          sx={{
            fontSize: "30PX",
            ml: "10px",
            fontWeight: "bold",
            color: theme.palette.info.dark,
          }}
        />} subTitle={"Simple Geography Chart"}/>


      <MainGeography isDashboard={false}/>

      </>
  );
}
