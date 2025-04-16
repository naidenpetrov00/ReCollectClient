import { useRouteError } from "react-router-dom";
import { Box, Typography, Link, Paper } from "@mui/material";

export const AppRootErrorBoundary = () => {
  const error = useRouteError() as any;
  const data = JSON.parse(error.data);

  return (
    <Box
      component={Paper}
      elevation={3}
      role="alert"
      aria-live="assertive"
      aria-labelledby="error-message"
      sx={{
        minHeight: "100vh",
        px: 3,
        py: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#fff3f3",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        color="error"
        fontWeight="bold"
        id="error-message"
        gutterBottom
      >
        {error.status}
      </Typography>
      <Typography variant="h5" mb={2}>
        {data.sorry}
      </Typography>
      <Typography variant="body1">
        If you believe this is a mistake, please reach out to{" "}
        <Link
          href="mailto:e.videnov@smart-projects.bg"
          aria-label="Email Emanuil Videnov"
        >
          e.videnov@smart-projects.bg
        </Link>
        .
      </Typography>
    </Box>
  );
};
