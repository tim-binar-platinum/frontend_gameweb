import { settings } from "./configs/game";
import "../Game/assets/css/Computer.css";

export const Computer = ({
  botScore,
  userSelection,
  botSelection,
  rockIcon,
  paperIcon,
  scissorsIcon,
}) => {
  return (
    <div className="computer-card">
      <h1>Computer</h1>
      {botScore < settings.winTarget ? (
        userSelection === "" ? (
          <h3 className="waiting-message">{settings.waitingMessage}</h3>
        ) : (
          <>
            <img
              src={
                botSelection === "Rock"
                  ? rockIcon
                  : botSelection === "Paper"
                  ? paperIcon
                  : scissorsIcon
              }
              alt="icon"
            />
            <h3>bot selected: {botSelection}</h3>
          </>
        )
      ) : (
        <>
          <h3>Victory!</h3>
        </>
      )}
    </div>
  );
};
