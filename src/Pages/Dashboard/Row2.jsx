import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MainLine from "../../Pages/Line/MainLine";
import { Transaction } from "./data";

export default function Row2() {
  const theme = useTheme();
  return (
    <>
      <Stack
        sx={{ mt: "10px", py: "10px" }}
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
      >
        {/* Left side */}
        <Paper
          sx={{
            p: "10px",
            minWidth: "400px",
            maxWidth: 800,
            flexGrow: 1,
            mx: "auto",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                sx={{ color: theme.palette.secondary.main, mb: "10px" }}
              >
                Revenue Generated
              </Typography>
              <Typography variant="body2">$65,124.245</Typography>
            </Box>

            <IconButton>
              <DownloadIcon />
            </IconButton>
          </Stack>

          {/* Line Chart */}
          <MainLine isDashboard={true} />
        </Paper>

        {/* Right side */}
        <Box
          sx={{
            // border: "1px solid",
            overflowY:"scroll",
            flexGrow: 1,
            height:"50vh",
            minWidth: "200px",
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          <Paper>
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              p={1.2}
              variant="h6"
            >
              Resent Transaction
            </Typography>
          </Paper>

          {Transaction.map((item) => {
            return (
              <Paper
                key={item.txId}
                sx={{
                  overflowy:"scroll" ,
                  mt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box p={1.2}>
                  <Typography variant="body1" fontWeight={600}>
                    {item.txId}
                  </Typography>
                </Box>
                <Typography variant="body1" fontWeight={600}>
                  {/* {transaction.user} */}
                  {item.user}
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  {/* {transaction.data} */}
                  {item.date}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  borderRadius={1.4}
                  p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(
                    theme.palette.error.main
                  )}
                >
                  {item.cost}$
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Stack>
    </>
  );
}
