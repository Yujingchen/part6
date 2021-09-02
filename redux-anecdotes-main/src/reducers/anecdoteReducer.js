import anecdotesServices from '../services/anecdotes'
const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NEW_ANECDOTE':
      return addNewAnecdote(state, action.data);
    case 'INIT_ANECDOTES': 
      return initAnecdotes(state, action)
    case 'UPDATE_ANECDOTE':
      return updateAnecdote(state, action.data);
    default: return state
  }
}

const initAnecdotes = (state, action) => {
  const newState = [...state].concat(action.data)
  return newState
}

const updateAnecdote = (state, data) => {
  const { id, votes } = data
  const newState = state.map((anecdote) => {
    if (anecdote.id === id)
      anecdote.votes = votes
      return anecdote
  })
  newState.sort((a,b)=> a.votes > b.votes ? -1 : 1) 
  return newState
}

const addNewAnecdote = (state, data) => {
  const newState = state.concat(data)
  newState.sort((a,b)=> a.votes > b.votes ? -1: 1)
  return newState
}

const generatedId = () => {
  return String((Math.random()*100000).toFixed(0))
}

export const addAnecdoteThunk = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesServices.createAnecdote(content)
    dispatch({
      type: 'CREATE_NEW_ANECDOTE',
      data: {
        ...newAnecdote,
        id: generatedId(),
      }
    })
  }
}

export const updateAnecdoteThunk = (anecdote) => {
  const { id, votes } = anecdote
  const newVotes = votes + 1
  const newAnecdote = {...anecdote, votes: newVotes}
  return async dispatch => {
      await anecdotesServices.updateAnecdote(id, newAnecdote)
      dispatch({
      type: 'UPDATE_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotesThunk = () => {
  return async dispatch => {
    const anecdotes = await anecdotesServices.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default reducer