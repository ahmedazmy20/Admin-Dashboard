import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useForm } from "react-hook-form";
import Header from "../../Components/Header";

export default function Form() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const emailRegX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  const NumRegX = /^01[0-2,5]{1}[0-9]{8}$/;
  const addressRegX = /^[#.0-9a-zA-Z\s,-]+$/;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleClick();
    console.log("Done"); // -> { /* submitted values here */ }
  };

  const [role, setRole] = React.useState("");

  const handleChange = (
    /** @type {{ target: { value: React.SetStateAction<string>; }; }} */ event
  ) => {
    setRole(event.target.value);
  };
  const theme = useTheme();

  return (
    <>
      <Header title={"CREATE PROFILE"} icon={<AccountBoxOutlinedIcon
          sx={{
            fontSize: "30PX",
            ml: "10px",
            fontWeight: "bold",
            color: theme.palette.info.dark,
          }}
        />} subTitle={"Create a new Profile"}/>


      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "This field is required & minLength 3 char."
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This field is required & minLength 3 char."
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email) ? "Please enter a valid email address." : null
          }
          {...register("email", {
            required: true,
            pattern: emailRegX, ///^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
          })}
          label="Email"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.number)}
          helperText={
            Boolean(errors.number)
              ? "Please enter a valid phone number (EGY) ."
              : null
          }
          {...register("number", {
            required: true,
            pattern: NumRegX, ///^01[0-2,5]{1}[0-9]{8}$/
          })}
          label="Contact Number"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.addess1)}
          helperText={
            Boolean(errors.addess1) ? "This field is required." : null
          }
          {...register("addess1", {
            required: true,
            pattern: addressRegX, // /^[#.0-9a-zA-Z\s,-]+$/
          })}
          label="Address 1"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.addess2)}
          helperText={
            Boolean(errors.addess2) ? "This field is required." : null
          }
          {...register("addess2", {
            required: true,
            pattern: addressRegX, // /^[#.0-9a-zA-Z\s,-]+$/
          })}
          label="Address 2"
          variant="filled"
        />

        <Box sx={{ minWidth: 120 }}>
          <FormControl variant="filled" fullWidth>
            <InputLabel required id="demo-simple-select-filled-label">
              Role
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={role}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Admin</MenuItem>
              <MenuItem value={20}>Manager</MenuItem>
              <MenuItem value={30}>User</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New User
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="success">
              Account create successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
}
