import Score from "./Score";

function Learner({ bio, name, scores }) {
  let scoreList = scores.map((el, index) => {
    return <Score key={index} score={el} />;
  });
  return (
    <>
      <h2>{name}</h2>
      <p>{bio}</p>
      {scoreList}
    </>
  );
}

export default Learner;
