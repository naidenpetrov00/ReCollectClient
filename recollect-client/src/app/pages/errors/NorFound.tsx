import { Link as RouterLink } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";
import { paths } from "../../../config/paths";

export const NotFoundPage = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={2}
    >
      <Typography variant="h2" fontWeight="bold" color="primary" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" mb={4}>
        Sorry, the page you are looking for does not exist or has been moved.
      </Typography>
      <Button
        component={RouterLink}
        to={paths.home.getHref()}
        replace
        variant="contained"
        color="primary"
        size="large"
      >
        Go to Home
      </Button>
    </Box>
  );
};
