import { settings } from "./configs/game";
import "../Game/assets/css/User.css";

export const User = ({ userScore, userSelection, children }) => {
  return (
    <div className="user-card">
      <h1>{settings.userName}</h1>
      {userScore < settings.winTarget ? (
        <>
          <div className="choice-grid">{children}</div>
          <h3>
            {userSelection === ""
              ? "Pick one!"
              : `Your choice: ${userSelection}`}
          </h3>
        </>
      ) : (
        <>
          <h3>Victory Royale!</h3>
        </>
      )}
    </div>
  );
};
