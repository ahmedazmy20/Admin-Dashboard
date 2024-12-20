import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Header from "../../Components/Header";
export default function Invoices() {
  const theme = useTheme();
  return (
    <>
      <Header
        title={"INVOICES"}
        icon={
          <ReceiptOutlinedIcon
            sx={{
              fontSize: "30PX",
              ml: "10px",
              fontWeight: "bold",
              color: theme.palette.info.dark,
            }}
          />
        }
        subTitle={"List of Invoice Balances"}
      />

      <Box style={{ height: 650, width: "98%", margin: "auto" }}>
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </>
  );
}
