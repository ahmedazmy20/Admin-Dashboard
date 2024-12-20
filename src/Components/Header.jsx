import { Box, Typography, useTheme } from '@mui/material';

export default function Header({title , icon , subTitle}) {
      const theme = useTheme();
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: "30PX",
            fontWeight: "bold",
            color: theme.palette.info.dark,
          }}
        >
          {title}
        </Typography>
        {icon}
      </Box>
      <Typography sx={{ mb: "40px", fontSize: "20PX" }}>
        {subTitle}
      </Typography>
      </Box>
  )
}
