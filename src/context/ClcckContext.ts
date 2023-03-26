import { createContext, Dispatch } from "react";
import { ClockActionType } from "../actions/ClockActions";
import { ClockStateDefaultValue } from "../constants";
import { ClockStateType } from "../types";

type ClockContextType = {
  state: ClockStateType;
  dispatch: Dispatch<ClockActionType>;
};

const ClockContextDefault: ClockContextType = {
  state: ClockStateDefaultValue,
  dispatch: () => {},
};

const ClockContext = createContext(ClockContextDefault);

export default ClockContext;
