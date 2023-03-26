export enum ActionTypes {
  INCREMENT_BREAK = 'INCREMENT_BREAK',
  DECREMENT_BREAK = 'DECREMENT_BREAK',
  INCREMENT_SESSION = 'INCREMENT_SESSION',
  DECREMENT_SESSION = 'DECREMENT_SESSION',
  CHANGE_ISRUNNING = 'CHANGE_ISRUNNING',
  RESET = 'RESET'
}

export type ClockActionType = 
| { type: ActionTypes.INCREMENT_BREAK }
| { type: ActionTypes.DECREMENT_BREAK }
| { type: ActionTypes.INCREMENT_SESSION }
| { type: ActionTypes.DECREMENT_SESSION }
| { type: ActionTypes.CHANGE_ISRUNNING, payload?: boolean }
| { type: ActionTypes.RESET }
