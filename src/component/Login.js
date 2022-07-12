import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import {
  faCoffee,
  AiOutlineEyeInvisible,
} from "@fortawesome/free-solid-svg-icons";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Cookies, useCookies } from "react-cookie";


const theme = createTheme();

function Login() {
  const signpadd = { paddingTop: 25 };
  const chk1 = { fontSize: 13 };
  const Links = { cursor: "pointer", color: "#5b55cf", textDecoration: "none" };
  const footer = { fontSize: 16 };
  const txtbx1 = {
    backgroundColor: "#1A202C",
    borderRadius: 10,
    color: "#FFFFFF",
  };
  const icnn = { fontSize: 15, backgroundColor: "#364153", border: "none" };
  const sidebar = { backgroundColor: "#364153", color: "white" };

  const [isShown, setIsSHown] = useState(false);

  const checkPassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [emailmessage, setMessage] = useState("");
  const [passMsg, setPassmsg] = useState("");
  const navigate = useNavigate();
  const EnaDec = email !== "" && password !== "";
  const [cookies, setCookie] = useCookies([]);
  const [statusMsg, setStatusmsg] = useState("");

  function LoginUser(e, role) {
    console.log("start");
    //const [role, setRole] = useState();

    // setCookie("Email", email);
    // setCookie("Password", password);
    //navigate("/Home");
    

    // e.preventDefault();

    //console.warn(name, email, mobile);
    console.log("hiiii");
    let data = { email, password };
    console.log("data my", data);

    let new_data = {};
    new_data["email"] = data["email"];
    new_data["password"] = data["password"];
    console.log(new_data);

    fetch("http://api.binaryhat.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("data 111  ", result.roles);
        //console.log('data11: ',result);
        //console.log('data22: ', result.data.access_token)

        // if() {
        //   navigate('/Users')
        // }
        // else{
        //   alert("error")
        // }

        //get msgs...............................
        if (result.status === "success") {
          setEmailErr(result.message);
          //navigate('/Users')
        } else {
          setStatusmsg(result.error.message);
        }

        localStorage.setItem("access_token", result["data"]["access_token"]);
        localStorage.setItem("resresh_token", result["data"]["refresh_token"]);
        // console.log('access_token...:  ',result["data"]["access_token"]);
        //console.log('ref_token...:  ', result['data']['refresh_token'])

        // let ref =  localStorage.getItem('resresh_token');
        // console.log('saurabh: ', ref)
        //console.log("Error Code: ", result.status);

        //setStatusmsg(result.error.message);
        //setEmailErr(result.email);

        // console.warn("Result", result);
      });

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    //Email Validation.............
    if (regEx.test(email)) {
      setMessage("");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else if (email === "") {
      setMessage("Please Fill The Email");
    } else {
      setMessage("");
    }

    //Password Validation.......................................

    if (password === "") {
      setPassmsg("Please fill the Password");
    } else if (!strongRegex.test(password)) {
      setPassmsg("Please INSERT Strong Password");
    } else {
      setPassmsg("");
    }

    setEmail("");
    setPassword("");

    console.log("end");
  }

  // const SetAllCookies = () => {
  //   let email = document.getElementById('email').value;
  //   let password = document.getElementById('password').value;

  //   document.cookie = "myEmail = " + email + ";path=http://localhost:3000/login"
  //   document.cookie = "myPassword = " + password + ";path=http://localhost:3000/login"
  // }


  // const reftoken = () => {
  //   console.log("hiiii");
  //   let data = { refresh_token };
  //   console.log("data my", data);

  //   let new_data = {};
  //   new_data["email"] = data["email"];
  //   console.log(new_data);

  //   fetch("http://api.binaryhat.com/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(new_data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log("data 111  ", result);

  //       // localStorage.setItem("access_token", result["data"]["access_token"]);
  //       // localStorage.setItem("resresh_token", result["data"]["refresh_token"]);
        
  //     });

    
  // }
  

  

  const RememberMe = () => {
    console.log("Cookies get data  ", document.cookie);

    let user = localStorage.getItem('Email');
    let pswd = localStorage.getItem('Password');
    // console.log(user)
    // console.log(pswd)

    document.getElementById('email').value=user;
    document.getElementById('password').value=pswd;

  };

  const SetLoccalstorage = () => {
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
  }


  function wrapFun() {
    LoginUser();
    //SetAllCookies();
  }

  // setTimeout(function() { alert("my message"); }, 1000);

  return (
    <React.Fragment>
      <div onClick={RememberMe}>
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <Grid
              style={sidebar}
              item
              xs={12}
              sm={8}
              md={3}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 4,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="span" variant="h5">
                  Bulk Order Processing App
                </Typography>
                <Typography component="span" variant="h5" style={signpadd}>
                  Log In
                </Typography>

                <Box
                  component="form"
                  method="POST"
                  autocomplete="off"
                  sx={{ mt: 1, input: { color: "#FFFFFF" } }}
                >
                  <TextField
                    style={txtbx1}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    autoFocus
                  />
                  <span className="message">{emailmessage}</span>

                  <span onClick={checkPassword} style={icnn}>
                    <VisibilityOffIcon />
                  </span>

                  <TextField
                    style={txtbx1}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    placeholder="Enter Password"
                    type={isShown ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />

                  <span className="message">{passMsg}</span>

                  <Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          type="checkbox"
                          onClick={SetLoccalstorage}
                          value="lsRememberMe"
                          id="rememberMe"
                          color="primary"
                        />
                      }
                      label="Remember Me"
                    />

                    <Typography component="span" variant="h5" style={chk1}>
                      <Link style={Links} to="/Recover">
                        Reset Password
                      </Link>{" "}
                    </Typography>
                  </Typography>

                  <Button
                    type="button"
                    fullWidth
                    //disabled={!EnaDec}
                    alert="Data Save"
                    variant="contained"
                    onClick={wrapFun}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Log In
                  </Button>

                  <Grid container>
                    <Typography component="span" variant="h5" style={footer}>
                      Don`t have account yet?
                      <Link to="/SignUp" style={Links}>
                        New Account
                      </Link>
                    </Typography>
                  </Grid>
                </Box>

                <b style={{ color: "white" }}>{statusMsg}</b>
                <b style={{ color: "white" }}>{emailErr}</b>
                <Link to="/Users">Users</Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={false}
              sm={4}
              md={9}
              sx={{
                backgroundColor: "#1A202C",
              }}
            />
          </Grid>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}

export default Login;