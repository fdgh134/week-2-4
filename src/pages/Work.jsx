import React from "react";
import { useParams } from "react-router-dom";

const data = [
  { id: 1, todo: "리액트 공부" },
  { id: 2, todo: "자바스크립트 공부" },
  { id: 3, todo: "리덕스 공부" },
  { id: 4, todo: "프롭스 공부" },
  { id: 5, todo: "넥스트 공부" },
  { id: 6, todo: "뷰 공부" },
];

function Work() {
  const param = useParams();
  const work = data.find((work) => work.id === parseInt(param.id));

  return <div>{work.todo}</div>
}

export default Work;