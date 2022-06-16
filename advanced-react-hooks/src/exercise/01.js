// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  // return typeof newCount === 'function' ? newCount(previousCount) : newCount

  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + action.step,
      }
    }
    default: {
      throw new Error(`Unsupported action type ${action.type}`)
    }
  }
}

function init(initialStateFromProps) {
  return initialStateFromProps
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(
    countReducer,
    {
      count: initialCount,
    },
    init,
  )
  const {count} = state

  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))

  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
