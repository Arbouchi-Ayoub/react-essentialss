import ProbCmpt from "./components/ProbCmpt";
import SolutionCmpt from "./components/SolutionCmpt";

function App() {
  return (
    <>
    <h1>Without memo</h1>
      <ProbCmpt />
      <hr />
      <h1>With memo</h1>
      <SolutionCmpt />
    </>
  );
}

export default App;
