import { Stack, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Card from "./Card";
import { data1 } from "./data";
import { data2 } from "./data";
import { data3 } from "./data";
import { data4 } from "./data";

export default function Row1() {
  const theme = useTheme();
  return (
    <Stack
      sx={{ justifyContent: "space-evenly" }}
      direction={"row"}
      flexWrap={"wrap"}
      gap={3}
    >

      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"11,245"}
        subTitle={"Emails Sent"}
        increase={"+18%"}
        data={data1}
        scheme={"nivo"}
      />

      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"254,211"}
        subTitle={"Sales Obtained"}
        increase={"+23%"}
        data={data2}
        scheme={"category10"}
      />

      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"26,542"}
        subTitle={"New Clients"}
        increase={"+4%"}
        data={data3}
        scheme={"accent"}
      />

      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,215,131"}
        subTitle={"Traffic Recieved"}
        increase={"++47%"}
        data={data4}
        scheme={"paired"}
      />
    </Stack>
  );
}
