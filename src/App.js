import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNumber, minusNumber } from "./redux/modules/counter";
import Router from "./shared/Router";

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
	// 1. 아래 코드 추가 👇
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNumber(+value);
  };

  const onClickAddNumberHandler = () => {
		// 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
    dispatch(addNumber(number));
  };
  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };

  return (
    <div>
			{/* 2. 아래 코드 추가  */}
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
      <br/>
      <Router />
    </div>
  );
};

export default App;