import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormHelperText } from "@mui/material";
import * as Yup from "yup";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const SignUpForm = () => {
  const paperStyle = {
    padding: 20,
    height: "fit-content",
    width: "300px",
    margin: "0px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    number: "",
    confirmpassword: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Name is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    number: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Number is required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });

  const onSubmit = (values, props) => {
    props.resetForm();
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    props.setSubmitting(true);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                name="name"
                fullWidth
                label="Name"
                placeholder="Enter your name"
                variant="standard"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                name="email"
                fullWidth
                label="Email"
                placeholder="Enter your email"
                variant="standard"
                helperText={<ErrorMessage name="email" />}
              />
              <FormControl component="fieldset" style={marginTop}>
                <FormLabel component="legend">Gender</FormLabel>
                <Field
                  as={RadioGroup}
                  aria-label="gender"
                  name="gender"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>
              <FormHelperText>
                <ErrorMessage name="gender" />
              </FormHelperText>
              <Field
                as={TextField}
                name="number"
                fullWidth
                label="Phone Number"
                placeholder="Enter your phone number"
                variant="standard"
                helperText={<ErrorMessage name="number" />}
              />
              <Field
                as={TextField}
                name="password"
                fullWidth
                label="Password"
                placeholder="Enter your password"
                variant="standard"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                name="confirmpassword"
                fullWidth
                label="Confirm Password"
                placeholder="Confirm your password"
                variant="standard"
                helperText={<ErrorMessage name="confirmpassword" />}
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termsAndConditions" />}
                label={
                  <span style={{ fontSize: "0.8rem" }}>
                    {"I accept the terms and conditions."}
                  </span>
                }
              />
              <FormHelperText>
                <ErrorMessage name="termsAndConditions" />
              </FormHelperText>
              <Button
              sx={{width: "100%"}}
                type="submit"
                variant="contained"
                color="primary"
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Sign Up"}
              </Button>
            </Form>
          )}
        </Formik>

        <div style={{ display: "flex", marginTop: "10px" }}>
          <div
            style={{ position: "relative", width: "100px", margin: "0 10px" }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                right: "0",
                transform: "translateY(-50%)",
                borderTop: "1px solid black",
              }}
            ></div>
          </div>
          <div style={{ fontWeight: "bold" }}>OR</div>
          <div
            style={{ position: "relative", width: "100px", margin: "0 10px" }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                right: "0",
                transform: "translateY(-50%)",
                borderTop: "1px solid black",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Avatar style={{ fontSize: "large" }}>
            <GoogleIcon />
          </Avatar>
          <Avatar style={{ fontSize: "large" }}>
            <FacebookIcon />
          </Avatar>
          <Avatar style={{ fontSize: "large" }}>
            <LinkedInIcon />
          </Avatar>
          <Avatar style={{ fontSize: "large" }}>
            <GitHubIcon />
          </Avatar>
        </div>
      </Paper>
    </Grid>
  );
};

export default SignUpForm;
