import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width={isNonMobileScreens ? "30%" : "73%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography  variant="h4" sx={{ mb: "3.5rem" }} textAlign={'center'} color={'white'}>
          Welcome to Cypress
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Login;