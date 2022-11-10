import "../Game/assets/css/Round.css";

export const Round = ({ userSelection, round }) => {
  return (
    <h1 className="round">
      {userSelection === "" ? "Round:0" : `Round: ${round}`}
    </h1>
  );
};
