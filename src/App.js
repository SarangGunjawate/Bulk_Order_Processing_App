import "./App.css";
import SignUp from "./component/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Recover from "./component/Recover";
import Users from "./component/Users";
import Stores from "./component/Stores";
import Customers from "./component/Customers";
import SetNewPassword from "./component/SetNewPassword";
import Greeting from "./component/Greeting";
import Product from "./component/Product";
import Upload from "./component/Upload";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Recover" element={<Recover />} />
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Stores" element={<Stores />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/SetNewPassword" element={<SetNewPassword />} />
            <Route path="/Greeting" element={<Greeting />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Upload" element={<Upload />} />
            {/* <Route path="/" element={<Navbar />} /> */}
            <Route path="/Navbar" element={<Navbar />} />
            {/* <Route path="/" element={<Navbar />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
