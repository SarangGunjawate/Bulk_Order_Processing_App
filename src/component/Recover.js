import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Recover.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";


const theme = createTheme();

function Recover() {
  const background = {
    backgroundColor: "#1A202C",
    height: "100vh",
    width: "100%",
  };
  const bgcollor = { backgroundColor: "#364153" };
  const lbl = { color: "white", marginLeft: 1 };

  const [username_or_email, setEmail] = useState("");
  const [statusMsg, setStatusmsg] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [code1, setCode] = useState('');
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([]);



  function resetPassword(event) {
    event.preventDefault();
    console.log("hiiii");
    let data = { username_or_email };
    console.log("data my", data);

    

    let new_data = {};
    new_data["username_or_email"] = data["username_or_email"];
    console.log(new_data);

    fetch("http://api.binaryhat.com/reset_password", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(new_data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("data 111  ", result);

        console.log('otp: ', result.data.otp)
        localStorage.setItem('otp', result.data.otp)
        localStorage.setItem('uuid', result.data.uuid)

        if (result.status === "success") {
          // setEmailErr(result.message);
          navigate('/SetNewPassword')
        } else {
          alert('Invalid Username or Email...');
          // setStatusmsg(result.error.message);
          // setCode(result.error.code);
        }
        
      });
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Grid container component="main" style={background}>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            style={bgcollor}
            className="setBackground"
          >
            <Typography component="h1" variant="h5" className="bulkord">
              Bulk Order Processing App
            </Typography>
            <Typography component="h1" variant="h5" style={{ color: "white" }}>
              Recover
            </Typography>
            <br />
            <br />
            <Box
              component="form"
              method="POST"
              autocomplete="off"
              sx={{ mt: 1, input: { color: "#FFFFFF" } }}
            >
              <label htmlFor="" style={lbl}>
                Email Address
              </label>
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                id="username_or_email"
                placeholder="Enter Full Email"
                name="username_or_email"
                autoComplete="email"
                autoFocus
                className="txtfild"
                onChange={(e) => setEmail(e.target.value)}
                value={username_or_email}
                // style={{backgroundColor: 'red'}}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="btn"
                onClick={resetPassword}
              >
                Reset Password
              </Button>
            </Box>
            <b style={{ color: "white" }}>{statusMsg}</b>
            <b style={{ color: "white" }}>{code1}</b>
            <b style={{ color: "white" }}>{emailErr}</b>
          </Box>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Recover;
