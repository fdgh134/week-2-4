import React from "react";
import { useLocation, Link } from "react-router-dom";

const Works = () => {
  const location = useLocation();
  console.log("location : >>", location);
  return (
    <div>
      Works
      <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
      <Link to="/contact">contact 페이지로 이동</Link>
    </div>
  );

};

export default Works;