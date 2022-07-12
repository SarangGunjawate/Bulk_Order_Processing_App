import React from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Home() {
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  const LogedOut = () => {
    document.cookie = "Email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "Password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/Login");
    // localStorage.clear();
  };
  function deleteItems() {
    localStorage.clear();
  }
  const wrapperFunction = () => {
    LogedOut();
    deleteItems();
  };

  return (
    <div>
      <h1>Sarang</h1>
      <h1>React get cookies</h1>
      {cookies && <p>{cookies.Email}</p>}
      {cookies && <p>{cookies.Password}</p>}
      <button onClick={wrapperFunction}>Logout</button>
    </div>
  );
}

export default Home;
