import { useState } from "react";

const Btn = ({ onClickBtn, children }) => {
  console.log("render-button : ", children);
  return <button style={{ cursor: "pointer" }} onClick={onClickBtn}>{children}</button>
}
const Counter = ({ counter, forr }) => {
  console.log("render-counter : ", forr);
  return <h4>{counter} - {forr}</h4>
}
const Title = ({ content }) => {
  console.log("render-title : ", content);
  return <h1>{content}</h1>
}

const ParentCmpt = () => {

  //____state
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  //___actions
  const incrementOne = () => setCounterOne(counterOne + 1)
  const incrementTwo = () => setCounterTwo(counterTwo + 1)
  const resetCounters = () => { setCounterTwo(0); setCounterOne(0) }


  return (
    <div style={{ textAlign: "center" }}>
      <Title content="use Callback Prob" />
      {/* Meet Counter  */}
      <Counter forr="🍖 (kg)" counter={counterOne} />
      <Btn onClickBtn={incrementOne}> Buy More</Btn>
      {/* Fruit Counter */}
      <Counter forr="🍍 (piece)" counter={counterTwo} />
      <Btn onClickBtn={incrementTwo}> Buy More</Btn>
      {/* reset BTN  */}
      <Title content="Reset" />
      <Btn onClickBtn={resetCounters} >Reset Values</Btn>
    </div>
  )
}

export default ParentCmpt