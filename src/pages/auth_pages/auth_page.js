import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SignInForm } from "../../components/auth_component/sign_in_form";
import SignUpForm from "../../components/auth_component/sign_up_form";
import { Header } from "../../components/header/header";

export const SignInUp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <>
      {/* <Header/> */}
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      </>
    );
  }

  const tabStyle = { width: "175px" }; // Adjust the width as needed
  const paperStyle = { width: "340px", margin: "20px auto" };
  return (
    <Paper elevation={10} style={paperStyle}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Sign In" style={tabStyle} />
        <Tab label="Sign Up" style={tabStyle} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignInForm handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUpForm />
      </TabPanel>
    </Paper>
  );
};
