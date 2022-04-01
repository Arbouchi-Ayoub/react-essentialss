import { memo, useCallback, useState } from "react";

const Btn = memo(
  ({ children, onClickBtn }) => {
    console.log("render-button : ", children);
    return (
      <>
        <button style={{ cursor: "pointer" }}
          onClick={onClickBtn}>
          {children}
        </button>
      </>
    )
  }
)
const Counter = memo(
  ({ counter, forr }) => {
    console.log("render-counter : ", counter, " ", forr);
    return <h4>{counter} - {forr}</h4>
  }
)
const Title = memo(({ content }) => {
  console.log("render-title : ", content);
  return <h1>{content}</h1>
})

const SolutionCmpt = () => {

  //____state
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  //___actions
  const incrementOne = useCallback(
    () => setCounterOne(counterOne + 1),
    [counterOne])
  const incrementTwo = useCallback(
    () => setCounterTwo(counterTwo + 1),
    [counterTwo])

  const resetCounters = useCallback(() => {
    setCounterTwo(0); 
    setCounterOne(0)
  },[])


  return (
    <div style={{ textAlign: "center" }}>
      <Title content="use Callback Prob" />
      {/* Meet Counter  */}
      <Counter forr="🍖 (kg)" counter={counterOne} />
      <Btn onClickBtn={incrementOne}>🍖 </Btn>
      {/* Fruit Counter */}
      <Counter forr="🍍 (piece)" counter={counterTwo} />
      <Btn onClickBtn={incrementTwo}> 🍍</Btn>
      {/* reset BTN  */}
      <Title content="Reset" />
      <Btn onClickBtn={resetCounters} >Reset Values</Btn>
    </div>
  )
}

export default SolutionCmpt