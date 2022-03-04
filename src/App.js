import { useState } from "react";


function App() {
  let [counter,setCounter]  = useState(0)
  
  const handleClick = ()=> setCounter(counter + 1)
  

  return (
    <div className="App">
      {counter}{" "}
      hello world 😇 !!
      <button 
      onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
