import produce from 'immer';
import { ClockActionType, ActionTypes } from '../actions/ClockActions';
import { ClockStateDefaultValue } from '../constants';
import { ClockStateType } from '../types';

const ClockReducer = (state: ClockStateType, action: ClockActionType) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.INCREMENT_BREAK:
        if (draft.breakLength < 60) draft.breakLength += 1;
        break;
      case ActionTypes.DECREMENT_BREAK:
        if(draft.breakLength > 1) draft.breakLength -= 1;
        break;
      case ActionTypes.INCREMENT_SESSION:
        if (draft.sessionLength < 60) draft.sessionLength += 1;
        break;
      case ActionTypes.DECREMENT_SESSION:
        if (draft.sessionLength > 1) draft.sessionLength -= 1;
        break;
      case ActionTypes.CHANGE_ISRUNNING:
        draft.isRunning = 'payload' in action && action.payload !== undefined ? action.payload : !draft.isRunning;
        break;
      case ActionTypes.RESET:
        draft.breakLength = ClockStateDefaultValue.breakLength;
        draft.sessionLength = ClockStateDefaultValue.sessionLength;
        break;


      default:
        break;
    }
  });

export default ClockReducer;