import { Button, Typography, Box } from "@mui/material";

export const MainErrorFallback = () => {
  return (
    <Box
      role="alert"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "error.main",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" fontWeight="600">
        Ooops, something went wrong :(
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 4 }}
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </Box>
  );
};
