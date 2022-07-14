import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const theme = createTheme();

function SignUp() {

  const signpadd = { paddingTop: 25 };
  const chk1 = { fontSize: 13 };
  const Links = { cursor: "pointer", color: "#5b55cf", textDecoration: "none" };
  const footer = { fontSize: 16 };
  const txtbx1 = {
    backgroundColor: " #1A202C",
    borderRadius: 10,
    color: "#FFFFFF",
  };
  const sidebar = { backgroundColor: "#364153", color: "white" };

  const [isShown, setIsSHown] = useState(false);

  const checkPassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [fnamemsg, setfNamemsg] = useState("");
  const [unamemsg, setUnamemsg] = useState("");
  const [passMsg, setPassmsg] = useState("");
  const [success, setSuccess] = useState("");
  const [regErr, setRegErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    if(localStorage.getItem('access_token')){
      // navigate('/SignUp')
    }
    else{
      navigate('/Login')
    }
  }, [])


  function saveUser(e) {
    e.preventDefault();
    //console.warn(name, email, mobile);
    console.log("hiiii");
    let data = { fullname, email, username, password };
    console.log("data my", data);

    fetch("http://api.binaryhat.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") {
          setSuccess(result.message);
        } else {
          setRegErr(result.error.message);
        }

        console.log("message of retive data", result.message);
        // console.log("Status_Code",Response.success)
      });
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    //const regularExpression = "^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$";
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    //FullName Validation...........................
    if (fullname === "") {
      setfNamemsg("Please Fill The Full Name");
    } else if (fullname.length < 10) {
      setfNamemsg("Full Name less than ten");
    } else if (fullname.length > 20) {
      setfNamemsg("Full Name greater than 20");
    } else {
      setfNamemsg("");
    }

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

    //UserName Validation..........................

    if (username === "") {
      setUnamemsg("Please Fill The UserName");
    } else if (username.length < 5) {
      setUnamemsg("UserName less than 5");
    } else if (username.length > 12) {
      setUnamemsg("UserName greater than 12");
    }
    // else if (!regularExpression.match(username)&& username !== "") {
    //   setUnamemsg("Username is not valid");
    // }
    else {
      setUnamemsg("");
    }

    //Password Validation.......................................

    if (password === "") {
      setPassmsg("Please fill the Password");
    } else if (!strongRegex.test(password)) {
      setPassmsg("Please INSERT Strong Password");
    } else {
      setPassmsg("");
    }

    setFullname("");
    setEmail("");
    setUsername("");
    setPassword("");
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />

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
              <Typography component="h1" variant="h5">
                Bulk Order Processing App
              </Typography>
              <Typography component="h1" variant="h5" style={signpadd}>
                Sign Up
              </Typography>

              <Box
                component="form"
                method="POST"
                autocomplete="off"
                sx={{ mt: 1, input: { color: "#FFFFFF" } }}
              >
                <TextField
                  className="txt1"
                  style={txtbx1}
                  margin="normal"
                  required
                  fullWidth
                  type="text"
                  id="fullname"
                  //onChange={handleFullname}
                  placeholder="Enter Full Name"
                  name="fullname"
                  autoComplete="fullname"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                    //handleFullname(e);
                  }}
                  autoFocus

                  // style={{backgroundColor: 'red'}}
                />
                <p className="message">{fnamemsg}</p>

                <label></label>
                <TextField
                  style={txtbx1}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  // onChange={handleEmail}
                  placeholder="Enter email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <p className="message">{message}</p>
                {/* {EmailEror?<span>Email Not Valid</span>:null} */}

                <label htmlFor=""></label>
                <TextField
                  style={txtbx1}
                  margin="normal"
                  required
                  fullWidth
                  // onChange={handleUsername}
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  autoComplete="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                />
                <p className="message">{unamemsg}</p>
                {/* {UsernameError?<span>UserName Not Valid</span>:null} */}
                <label htmlFor=""></label>
                <TextField
                  style={txtbx1}
                  margin="normal"
                  required
                  fullWidth
                  // onChange={handlePassword}
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

                <p className="message">{passMsg}</p>

                {/* <p>{passwordError?<span>Password Not Valid</span>:null}</p> */}

                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      checked={isShown}
                      onChange={checkPassword}
                    />
                  }
                  label=""
                />

                <Typography component="h1" variant="h5" style={chk1}>
                  By creating an account you agree to the
                  <Link style={Links} to="">
                    terms of use
                  </Link>
                  and our
                  <Link style={Links} to="">
                    privacy policy
                  </Link>
                  .
                </Typography>

                <Button
                  type="submit"
                  fullWidth
                  alert="Data Save"
                  variant="contained"
                  onClick={saveUser}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>

                <Grid container>
                  <Typography component="h1" variant="h5" style={footer}>
                    Already have an account?{" "}
                    <Link to="/Login" style={Links}>
                      Log in
                    </Link>
                  </Typography>
                </Grid>
              </Box>
              <b style={{ color: "white" }}>{success}</b>
              <b style={{ color: "white" }}>{regErr}</b>
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
    </React.Fragment>
  );
}

export default SignUp;