import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const theme = createTheme();

function Greeting() {
  const [greeting, setGreeting] = React.useState("");

  const handleChange = (event) => {
    setGreeting(event.target.value);
  };

  const [value, setValue] = useState("none");
  const [showPlaceholder, setShowPlaceholder] = useState();


  return (
    <div>
      <Box>
        <FormControl style={{ width: 930 }}>
          <Typography
            component="span"
            variant="h5"
            style={{ textAlign: "center", paddingTop: 30 }}
          >
            Greeting
          </Typography>
          <Box
            component="form"
            method="POST"
            autocomplete="off"
            sx={{ mt: 1, input: { color: "black" } }}
            style={{ paddingLeft: 20 }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="TO"
              style={{ width: 450 }}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="FROM"
              sx={{ marginLeft: 1 }}
              style={{ width: 450 }}
            />
            <br />
            <InputLabel id="demo-simple-select-label" sx={{marginTop: 17, marginLeft: 3}}>What type of greeting card?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={greeting}
              fullWidth
              label="What type of greeting card?"
              onChange={handleChange}
              style={{ marginTop: 10, color: "black" }}
              
            >
              <MenuItem value={1}>Anniversary Card</MenuItem>
              <MenuItem value={2}>Birthday Card</MenuItem>
              <MenuItem value={3}>Celebration Card</MenuItem>
              <MenuItem value={4}>Christmas Card</MenuItem>
              <MenuItem value={5}>Congratulation Card</MenuItem>
              <MenuItem value={6}>Easter Card</MenuItem>
              <MenuItem value={7}>Enjoy Card</MenuItem>
              <MenuItem value={8}>Father's Day Card</MenuItem>
              <MenuItem value={9}>Get Well Soon Card</MenuItem>
              <MenuItem value={10}>Halloween Card</MenuItem>
              <MenuItem value={11}>Hanukkah Card</MenuItem>
              <MenuItem value={12}>Housewarming Card</MenuItem>
              <MenuItem value={13}>Love You Card</MenuItem>
              <MenuItem value={14}>Missing You Card</MenuItem>
              <MenuItem value={15}>Mother's Day Card</MenuItem>
              <MenuItem value={16}>Baby Boy Card</MenuItem>
              <MenuItem value={17}>Baby Girl Card</MenuItem>
              <MenuItem value={18}>New Year Card</MenuItem>
              <MenuItem value={19}>Passover Card</MenuItem>
              <MenuItem value={20}>Purim Card</MenuItem>
              <MenuItem value={21}>Remembrance Day Card</MenuItem>
              <MenuItem value={22}>Rosh Hashanah Card</MenuItem>
              <MenuItem value={23}>St. Patrick's Day Card</MenuItem>
              <MenuItem value={24}>Sympathy Card</MenuItem>
              <MenuItem value={25}>Sorry Card</MenuItem>
              <MenuItem value={26}>Thank You Card</MenuItem>
              <MenuItem value={27}>Thanksgiving Card</MenuItem>
              <MenuItem value={28}>Thinking of You Card</MenuItem>
              <MenuItem value={29}>Valentine's Day Card</MenuItem>
              <MenuItem value={30}>Wedding Card</MenuItem>
              <MenuItem value={31}>Welcome Card</MenuItem>
              <MenuItem value={32}>Other Card</MenuItem>
            </Select>
            <h4 style={{ paddingTop: 15 }}>Message (Max character:500)</h4>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={5}
              placeholder="Add a message"
              style={{
                width: 908,
                textIndent: 10,
                height: 80,
                paddingTop: 10,
                marginTop: 10,
                fontSize: 16,
              }}
            />
            <br />
            <Button
              type="button"
              fullWidth
              //disabled={!EnaDec}
              alert="Data Save"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              submit
            </Button>
          </Box>
        </FormControl>
      </Box>
    </div>
  );
}

export default Greeting;
