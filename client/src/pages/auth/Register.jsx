import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
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
          Sign up to Cypress
        </Typography>
        <RegisterForm />
      </Box>
    </Box>
  );
};

export default Register;