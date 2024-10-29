import { useState } from "react";
import learners from "./utilities/data.mjs";
import Learner from "./components/Learner";
import "./App.css";

function App() {
  const [learnerData, setLearnerData] = useState({ learners: learners });

  let learnerList = learnerData.learners.map((el) => {
    return (
      <Learner key={el.name} name={el.name} bio={el.bio} scores={el.scores} />
    );
  });
  return <>{learnerList}</>;
}

export default App;
