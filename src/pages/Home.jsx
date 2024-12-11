import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
  <div>
    Home
    <button onClick={() => {navigate("/works")}}>Works로 이동</button>
  </div>
  )

};

export default Home;