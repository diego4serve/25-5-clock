import { useContext } from "react";
import { ActionTypes } from "../actions/ClockActions";
import ClockContext from "../context/ClcckContext";

const SessionContainer = () => {
  const { state, dispatch } = useContext(ClockContext);

  const handleDecrement = () => {
    dispatch({type: ActionTypes.DECREMENT_SESSION});
  }

  const handleIncrement = () => {
    dispatch({type: ActionTypes.INCREMENT_SESSION});
  }

  return (
    <div className="length-container">
      <h6 id="session-label">Session Length</h6>
      <div className="length-controls">
        <button
          className="length-controls"
          id="session-decrement"
          onClick={handleDecrement}
          disabled={state.isRunning}
        >
          ⬇︎
        </button>
        <p className="length-controls" id="session-length">
          {state.sessionLength}
        </p>
        <button
          className="length-controls"
          id="session-increment"
          onClick={handleIncrement}
          disabled={state.isRunning}
        >
          ⬆︎
        </button>
      </div>
    </div>
  );
}

export default SessionContainer;