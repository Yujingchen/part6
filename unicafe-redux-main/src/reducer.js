const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return { ...state, good: increase(state.good) }
    case 'OK':
      return { ...state, ok: increase(state.ok) }
    case 'BAD':
      return { ...state, bad: increase(state.bad) }
    case 'ZERO':
      return { ...state, good: 0, ok: 0, bad: 0 }
    default: return state
  }
}

const increase = (initialNumber) => {
  const increased = initialNumber + 1
  return increased;
}

export default counterReducer