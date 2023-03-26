import { useContext } from "react";
import { ActionTypes } from "../actions/ClockActions";
import ClockContext from "../context/ClcckContext";

const BreakContainer = () => {
  const { state, dispatch } = useContext(ClockContext);

  const handleDecrement = () => {
    dispatch({type: ActionTypes.DECREMENT_BREAK});
  }

  const handleIncrement = () => {
    dispatch({type: ActionTypes.INCREMENT_BREAK});
  }

  return (
    <div className="length-container">
      <h6 id="break-label">Break Length</h6>
      <div className="length-controls">
        <button
          className="length-controls"
          id="length-decrement"
          onClick={handleDecrement}
          disabled={state.isRunning}
        >
          ⬇︎
        </button>
        <p className="length-controls" id="length-length">
          {state.breakLength}
        </p>
        <button
          className="length-controls"
          id="length-increment"
          onClick={handleIncrement}
          disabled={state.isRunning}
        >
          ⬆︎
        </button>
      </div>
    </div>
  );
}

export default BreakContainer;