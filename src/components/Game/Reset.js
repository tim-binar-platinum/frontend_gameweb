import { settings } from "./configs/game";
import "../Game/assets/css/Reset.css";

export const Reset = ({ onClick, userSelection, userScore, botScore }) => {
  return (
    userSelection !== "" && (
      <div onClick={onClick} className="reset-btn">
        <h3>
          {userScore === settings.winTarget || botScore === settings.winTarget
            ? "Play again"
            : "Reset"}
        </h3>
      </div>
    )
  );
};
