import { useEffect, useState } from "react";

export default function Child() {
  const [counter, setCounter] = useState(0);
  //component did mount
  useEffect(() => {
    console.log("useEffect");
  }, []);

  //component did update
  //   useEffect(() => {
  //     if (counter !== 0) console.log(counter);
  //   });

  //component did update
  useEffect(() => {
    if (counter !== 0) console.log(counter);
  }, [counter]);


  //cpmt will unmount  
  useEffect(() => {
    return () => console.log("good bye !")
  },[]);

  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-success"
      >
        Increment 😇
      </button>
    </>
  );
}
