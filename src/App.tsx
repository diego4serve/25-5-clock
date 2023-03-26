import { useReducer } from 'react'
import './App.css'
import { ClockStateDefaultValue } from './constants'
import BreakContainer from './containers/BreakContainer'
import SessionContainer from './containers/SessionContainer'
import TimerContainer from './containers/TimerContainer'
import ClockContext from './context/ClcckContext'
import ClockReducer from './reducers/ClockReducer'

function App() {
  const [state, dispatch] = useReducer(ClockReducer, ClockStateDefaultValue);

  return (
    <ClockContext.Provider value={{ state, dispatch }}>
      <div className="apple-watch">
        <div className="display">
          <SessionContainer />
          <BreakContainer />
          <TimerContainer />
        </div>
      </div>
    </ClockContext.Provider>
  )
}

export default App
