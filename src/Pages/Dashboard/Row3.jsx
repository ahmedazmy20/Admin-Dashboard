import { Paper, Stack, Typography, useTheme } from "@mui/material";
import MainPie from "../../Pages/Pie/MainPie";
import MainBar from "../../Pages/Bar/MainBar";
import MainGeography from "../../Pages/Geography/MainGeography";

export default function Row3() {
  const theme = useTheme()
  return (
    <Stack direction={"row"} flexWrap={"wrap"} mt={1} gap={1.5} >



      {/* Pie */}
      <Paper sx={{flexGrow:1,  minWidth:"400px", width: "28%"} }>
        <Typography
        sx={
          {padding:"30px 30px 0 30px"}
        }
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          p={1.2}
          variant="h5"
        >
          Campaing
        </Typography>
        <MainPie isDashboard={true} />

        <Typography variant="h6" align="center" sx={{mt:"15px"}} >
          $25.515 revenue generated
        </Typography>

        <Typography variant="body2" align="center"px={0.7} pb={3} >
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>




      {/* Bar */}
      <Paper sx={{flexGrow:1, minWidth:"400px",  width: "28%"}}>
      <Typography
        sx={
          {padding:"30px 30px 0 30px"}
        }
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          p={1.2}
          variant="h5"
        >
          Sales Quantity
        </Typography>
        <MainBar isDashboard={true}/>
      </Paper>


      {/* Geography */}
      <Paper sx={{flexGrow:1, minWidth:"400px",  width: "28%"  }}>
      <MainGeography isDashboard={true} />
      </Paper>


    </Stack>
  );
}
