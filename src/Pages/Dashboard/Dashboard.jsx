import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Header from "../../Components/Header";

export default function Dashboard() {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
        <Header
          title={"DASHBOARD"}
          icon={
            <DashboardOutlinedIcon
              sx={{
                fontSize: "30PX",
                ml: "10px",
                fontWeight: "bold",
                color: theme.palette.info.dark,
              }}
            />
          }
          subTitle={"Welcome to your dashboard"}
        />

        <Box sx={{ textAlign: "right" }}>
          <Button
            sx={{
              padding: "6px 8px",
              marginBottom: "15px",
              textTransform: "capitalize",
            }}
            variant="contained"
            color="primary"
          >
            <GetAppOutlinedIcon />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Box>
        {/* ____________ ROW 1 ___________ */}
        <Row1 />

        {/* ____________ ROW 2 ___________ */}
        <Row2 />

        {/* ____________ ROW 3 ___________ */}
        <Row3 />
      </Box>
    </>
  );
}
