import React, { useCallback, useEffect, useState } from "react";

const Btn = React.memo(({ onClickBtn, children }) => {
    console.log("render-button : ", children);
    return <button style={{ cursor: "pointer" }} onClick={onClickBtn}>{children}</button>
})
const Counter = React.memo(({ counter, forr }) => {
    console.log("render-counter : ", forr);
    return <h4>{counter} - {forr}</h4>
})
const Title = React.memo(({ content }) => {
    console.log("render-title : ", content);
    return <h1>{content}</h1>
})

const Solution = () => {

    //____state
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const [bothCountersWereChanged, theyChanged] = useState("")


    //___actions
    const incrementOne = useCallback(() => setCounterOne(counterOne + 1), [counterOne])
    const incrementTwo = useCallback(() => setCounterTwo(counterTwo + 1), [counterTwo])
    const resetCounters = useCallback(() => { setCounterTwo(0); setCounterOne(0) }, [bothCountersWereChanged])




    //____effect

    useEffect(() => {

        if (counterOne == 0 && counterTwo == 0) {
            theyChanged(true)
        }
        else theyChanged(false)


    }, [counterOne])


    return (
        <div style={{ textAlign: "center" }}>
            <Title content="use Callback Solution" />
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

export default Solution