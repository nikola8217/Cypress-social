import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone";
import FlexBetween from "../other/FlexBetween";

const registerSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  passConfirm: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const initialValuesRegister = {
    name: "",
    email: "",
    password: "",
    passConfirm: "",
    location: "",
    occupation: "",
};


const RegisterForm = () => {

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleNavigate = () => {
    navigate('/login');
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
   
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
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
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={Boolean(touched.name) && Boolean(errors.name)}
                helperText={touched.name && errors.name}
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
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
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
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
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
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.passConfirm}
              name="passConfirm"
              error={Boolean(touched.passConfirm) && Boolean(errors.passConfirm)}
              helperText={touched.passConfirm && errors.passConfirm}
              sx={{ gridColumn: "span 2" }}
              InputProps={{
                style: { color: '#fff' },
                placeholder: 'Confirm your password',
              }}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
            />
            <Box
                gridColumn="span 4"
                border={`1px solid ${palette.neutral.medium}`}
                borderRadius="5px"
                p="1rem"
            >
                <Dropzone
                acceptedFiles=".jpg,.jpeg,.png"
                multiple={false}
                onDrop={(acceptedFiles) =>
                    setFieldValue("picture", acceptedFiles[0])
                }
                >
                {({ getRootProps, getInputProps }) => (
                    <Box
                    {...getRootProps()}
                    border={`2px dashed ${palette.primary.main}`}
                    p="1rem"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                    <input {...getInputProps()} />
                    {!values.picture ? (
                        <p style={{ color: 'white' }}>Add Picture Here</p>
                    ) : (
                        <FlexBetween>
                        <Typography>{values.picture.name}</Typography>
                            <EditOutlinedIcon />
                        </FlexBetween>
                    )}
                    </Box>
                )}
                </Dropzone>
            </Box>
            <TextField
                label="Location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.location}
                name="location"
                error={Boolean(touched.location) && Boolean(errors.location)}
                helperText={touched.location && errors.location}
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
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.occupation}
                name="occupation"
                error={
                Boolean(touched.occupation) && Boolean(errors.occupation)
                }
                helperText={touched.occupation && errors.occupation}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                    style: { color: '#fff' },
                    placeholder: 'Enter your occupation',
                  }}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
            />
            
          </Box>

          <Box>
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
      )}
    </Formik>
  );
};

export default RegisterForm;