import React, { Component } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

class Upload extends Component {
  state = {
    file: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("file", this.state.file, this.state.file.name);

    let url = "http://api.binaryhat.com/uploads";
    axios
      .post(url, form_data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Box
          component="form"
          onSubmit={this.handleSubmit}
          method="POST"
          autocomplete="off"
          sx={{ mt: 1, input: { color: "#FFFFFF" } }}
        >
          <TextField
            style={{ backgroundColor: "#639194" }}
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            onChange={this.handleImageChange}
            required
          />

          <TextField style={{ backgroundColor: "#727cc4" }} type="submit" />
        </Box>
      </div>
    );
  }
}

export default Upload;
