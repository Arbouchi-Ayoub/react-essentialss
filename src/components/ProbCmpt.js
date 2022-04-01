import { useState } from "react";

function ProbCmpt() {
  //____STATE

  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  const increment1 = () => {
    setCounter1(counter1 + 1);

  };

  const increment2 = () => {
    setCounter2(counter2 + 1);
  };

  //________UTIL
  const isEven = () => {
    for (let i = 0; i < 1000000000; i++);
    return counter1 % 2 === 0 ? "Even" : "Odd";
  };

  return (
    <div
      style={{ border: "solid 1px", textAlign: "center", padding: 10, zoom: 3 }}
    >
      <button 
      onClick={increment1}> 
      counter One - {counter1} 
      </button>
      {isEven()}
      <br />
      <br />
      <button onClick={increment2}> 
      counter Two - {counter2} </button>
    </div>
  );
}

export default ProbCmpt;
