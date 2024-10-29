import { useState } from "react";
import learners from "./utilities/data.mjs";
import Learner from "./components/Learner";
import "./App.css";

function App() {
  const [learnerData, setLearnerData] = useState({ learners: learners });

  return(
   <>
  </>
  )
}

export default App;
