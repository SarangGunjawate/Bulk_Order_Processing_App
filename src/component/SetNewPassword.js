import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Recover.css";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const theme = createTheme();

function SetNewPassword() {
  const background = {
    backgroundColor: "#1A202C",
    height: "100vh",
    width: "100%",
  };
  const bgcollor = { backgroundColor: "#364153" };
  const lbl = { color: "white", marginLeft: 1 };

  const [otp, setOtp] = useState("");
  const [new_password, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [statusMsg, setStatusmsg] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [code1, setCode] = useState("");
  const [confPasserr, setConFPassErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    if(localStorage.getItem('access_token')){
      navigate('/SetNewPassword')
    }
    else{
      navigate('/Login')
    }
  }, [])

  let uuid = localStorage.getItem("uuid");
  let otp1 = localStorage.getItem("otp");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);

  // Password toggle handlerpasswordShown1
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };

  function setPass(event) {
    event.preventDefault();
    //alert('hiiii', localStorage.getItem('otp'));
    // localStorage.getItem('otp');
    //let otttp = console.log('SetNewPasswordOTP...',localStorage.getItem('otp'));

    // if(otp !== otttp){
    //   alert('Diff OTP');
    // }else{
    //   alert('same OTP');
    // }

    if (new_password !== confirmPass) {
      alert("Passwords don't match");
    } else {
      // make API call
      let data = { new_password, otp, uuid };
      console.log("data my", data);

      let new_data = {};
      new_data["new_password"] = data["new_password"];
      new_data["otp"] = data["otp"];
      new_data["uuid"] = data["uuid"];
      console.log("New_dt: ", new_data);

      fetch("http://api.binaryhat.com/set_password", {
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

          // console.log('otp: ', result.data.otp)
          // localStorage.setItem('otp', result.data.otp)

          if (otp !== otp1) {
            alert("Please Enter Correct OTP.....");
          }
          if (result.status === "success") {
            //setEmailErr(result.message);
            alert("Password Reset Successfullt.....");
            navigate("/Login");
          } else {
            setStatusmsg(result.error.message);
            setCode(result.error.code);
            //alert("Password created successfully");
          }
        });
    }
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
              Set Password
            </Typography>
            <br />

            <Box
              component="form"
              method="POST"
              autocomplete="off"
              sx={{ mt: 0, input: { color: "#FFFFFF" } }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                id="otp"
                placeholder="Enter OTP"
                name=""
                autoComplete="OTP"
                className="txtfild"
                autoFocus
                // style={{backgroundColor: 'red'}}
                style={{ width: 440, marginLeft: 15 }}
                onChange={(e) => setOtp(e.target.value)}
              />

              <div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  // type="text"
                  type={passwordShown ? "text" : "password"}
                  id="newPass"
                  placeholder="Enter New Password"
                  name=""
                  autoComplete="password"
                  className="txtfild"
                  onChange={(e) => setNewPass(e.target.value)}
                  style={{ width: 440, marginLeft: 15 }}
                />
                <span>
                  <i
                    onClick={togglePasswordVisiblity}
                    style={{
                      float: "left",
                      marginLeft: 400,
                      position: "absolute",
                      right: 70,
                      marginTop: 30,
                      cursor: "pointer",
                    }}
                  >
                    {eye}
                  </i>{" "}
                </span>
              </div>

              <div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  //type="text"
                  type={passwordShown1 ? "text" : "password"}
                  id="confPass"
                  placeholder="Enter Confirm Password"
                  name=""
                  autoComplete="password"
                  className="txtfild"
                  onChange={(e) => setConfirmPass(e.target.value)}
                  style={{ width: 440, marginLeft: 15 }}
                />
                <span>
                  <i
                    onClick={togglePasswordVisiblity1}
                    style={{
                      float: "left",
                      marginLeft: 400,
                      position: "absolute",
                      right: 70,
                      marginTop: 30,
                      cursor: "pointer",
                    }}
                  >
                    {eye}
                  </i>{" "}
                </span>
              </div>
              <b style={{ color: "white" }}>{confPasserr}</b>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="btn"
                style={{ width: 440, marginLeft: 15 }}
                onClick={setPass}
              >
                Set Password
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

export default SetNewPassword;
