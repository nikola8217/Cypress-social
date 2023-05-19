import { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  Avatar
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/userActions";


const RegisterForm = () => {

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [userImage, setUserImage] = useState('img/default.jpg');
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [about, setAbout] = useState("");
  const [successMessage, setSuccessMessage] = useState('');

  const { loading, success, error } = useSelector(state => state.userRegister);
  const { userAccount } = useSelector(state => state.userLogin);

  useEffect(() => {
    if (userAccount) {
      navigate('/');
    } else {
      if (success) {
        setSuccessMessage(`Welcome ${name}!`);
        setTimeout(() => {
            dispatch({ type: 'USER_REGISTER_RESET' });
            navigate('/login');
        }, 1000);
      }
    }
  }, [navigate, userAccount, success]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          setUserImage(e.target.result);
        };
  
        reader.readAsDataURL(file);
      }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, passConfirm, userImage, location, occupation, about))
  };

  const handleNavigate = () => {
    navigate('/login');
  };


  return (
    <>
        <form onSubmit={handleSubmit}>
            <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
                label="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                    style: { color: '#fff' },
                    placeholder: 'Enter your name',
                  }}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
            />
            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              sx={{ gridColumn: "span 2" }}
              InputProps={{
                style: { color: '#fff' },
                placeholder: 'Enter your email',
              }}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
            />
            <TextField
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              sx={{ gridColumn: "span 2" }}
              InputProps={{
                style: { color: '#fff' },
                placeholder: 'Enter your password',
              }}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
            />
            <TextField
              label="Password Confirm"
              type="password"
              onChange={(e) => setPassConfirm(e.target.value)}
              value={passConfirm}
              name="passConfirm"
              sx={{ gridColumn: "span 2" }}
              InputProps={{
                style: { color: '#fff' },
                placeholder: 'Confirm your password',
              }}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
            />
            <Box sx={{ gridColumn: "span 4", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Avatar
                    alt="User Image"
                    src={userImage}
                    sx={{ width: 100, height: 100, cursor: 'pointer' }}
                    onClick={handleImageClick}
                />
                <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </Box>
            
            <TextField
                label="Location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                name="location"
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                    style: { color: '#fff' },
                    placeholder: 'Enter your location',
                  }}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
            />
            <TextField
                label="Occupation"
                onChange={(e) => setOccupation(e.target.value)}
                value={occupation}
                name="occupation"
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                    style: { color: '#fff' },
                    placeholder: 'Enter your occupation',
                  }}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
            />
            <TextField
                multiline 
                rows={4} 
                label="About you"
                onChange={(e) => setAbout(e.target.value)}
                value={about}
                name="about"
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                    style: { color: '#fff' },
                    placeholder: 'Tell us something about you',
                  }}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
            />
            
          </Box>

          <Box display='flex' flexDirection='column' textAlign='center' mt={3}>
            {loading && <Typography variant='p' textAlign={'center'} >Loading...</Typography>}
            {error && <Typography variant='p' color={'red'} textAlign={'center'} >{error}</Typography>}
            {successMessage && <Typography variant='p' color={'green'} textAlign={'center'}>{successMessage}</Typography>}
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                "&:hover": { color: palette.primary.main },
              }}
              variant="outlined"
            >
              REGISTER
            </Button>
            <Typography
              onClick={() => handleNavigate()}
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              textAlign={'center'}
            >
                Already have an account? Login here.
            </Typography>
          </Box>        
        </form>
    </>
  );
};

export default RegisterForm;