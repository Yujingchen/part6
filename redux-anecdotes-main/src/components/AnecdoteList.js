import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { notificationChangeAction } from '../reducers/notificationReducer'
import { updateAnecdoteAction } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotesState = useSelector(state => state.anecdotes)
  const filterValueState = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const updateVote = (id) => {
    dispatch(updateAnecdoteAction(id))
    dispatch(notificationChangeAction("SET_NOTIFICATION"))
    setTimeout(()=> { dispatch(notificationChangeAction("RESET_NOTIFICATION"))}, 5000)
  }
  const filterByValue = (anecdotes, filterValue) => {
    const newAnecdotes = anecdotes.filter(anecdote => anecdote.content.includes(filterValue))
    return newAnecdotes
  }
  const anecdotes = filterByValue(anecdotesState, filterValueState)

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id} style={{"border": "solid 1px black", "padding":"5px", "margin":"5px"}}>
          <div>
            {anecdote.content}
          </div>
          <div>
            <span>has {anecdote.votes} </span>
            <button onClick={() => updateVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  ) 
}

export default AnecdoteList;