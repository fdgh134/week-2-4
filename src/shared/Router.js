import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          {/* 
              Routes안에 이렇게 작성한다. 
              Route에는 react-router-dom에서 지원하는 props들이 있다.

              path는 사용하고싶은 "주소"를 넣어주면 된다.
              element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어준다.
          */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;