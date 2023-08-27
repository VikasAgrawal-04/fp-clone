import { Grid, Paper, Avatar, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";
import { FormControlLabel, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Button, Link } from "@mui/material";
import { blue } from "@mui/material/colors";
import { AiFillFacebook } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const SignInForm = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: "300px",
    margin: "0px auto",
  };
  const avatarStyle = { backgroundColor: "#2d90e7" };
  const btnStyle = { margin: "0px 0" };
  const initialValues = {
    username: "",
    password: "",
    rememberme: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, props) => {
    props.resetForm();
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    props.setSubmitting(true);
    console.log(values);
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
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
                label="Username"
                name="username"
                placeholder="Enter Username"
                helperText={<ErrorMessage name="username" />}
                variant="standard"
                fullWidth
                required
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                placeholder="Enter Password"
                type="password"
                helperText={<ErrorMessage name="password" />}
                variant="standard"
                fullWidth
                required
              />
              <Field
                as={FormControlLabel}
                name="rememberme"
                required
                control={<Checkbox />}
                label="Remember Me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                style={btnStyle}
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Sign In"}{" "}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forgot Password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up
          </Link>
        </Typography>
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
