const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

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
    case 'UPDATE_ANECDOTE':
      return updateAnecdote(state, action.data);
    case 'CREATE_NEW_ANECDOTE':
      return addNewAnecdote(state, action.data);
    default: return state
  }
}

const updateAnecdote = (state, data) => {
  const { id } = data
  const newState = state.map((anecdote) => {
    if (anecdote.id === id)
      anecdote.votes += 1
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

export const addAnecdoteAction = (content) => {
  return {
    type: 'CREATE_NEW_ANECDOTE',
    data: {
      content,
      id: generatedId(),
      votes: 0
    }
  }
}

export const updateAnecdoteAction = (id) => {
  return {
    type: 'UPDATE_ANECDOTE',
    data: {
      id
    }
  }
}


export default reducer