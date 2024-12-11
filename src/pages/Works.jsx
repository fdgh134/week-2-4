import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";

const data = [
  { id: 1, todo: "리액트 공부" },
  { id: 2, todo: "자바스크립트 공부" },
  { id: 3, todo: "리덕스 공부" },
  { id: 4, todo: "프롭스 공부" },
  { id: 5, todo: "넥스트 공부" },
  { id: 6, todo: "뷰 공부" },
];

// const Works = () => {
//   const location = useLocation();
//   console.log("location : >>", location);
//   return (
//     <div>
//       Works
//       <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
//       <Link to="/contact">contact 페이지로 이동</Link>
//     </div>
//   );

// };

function Works() {
  return (
    <div>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일: {work.id}</div>
            <Link to={`/works/${work.id}`}>
              <span style={{cursor:"pointer"}}>➡ Go To: {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;