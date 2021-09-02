import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNotificationThunk } from '../reducers/notificationReducer'
import { updateAnecdoteThunk, initializeAnecdotesThunk } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotesState = useSelector(state => state.anecdotes)
  const filterValueState = useSelector(state => state.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotesThunk())
  },[dispatch])

  const updateVote = async (anecdote) => {
    await dispatch(updateAnecdoteThunk(anecdote))
    dispatch(setNotificationThunk(`you voted '${anecdote.content}'`, 10))
  }

  const filterByValue = (anecdotes, filterValue) => {
    const newAnecdotes = anecdotes.filter(anecdote => anecdote.content.includes(filterValue))
    return newAnecdotes
  }
  const anecdotes = filterByValue(anecdotesState, filterValueState)

  return (
    <div>
      {anecdotes ? anecdotes.map(anecdote =>
        <div key={anecdote.id} style={{"border": "solid 1px black", "padding":"5px", "margin":"5px"}}>
          <div>
            {anecdote.content}
          </div>
          <div>
            <span>has {anecdote.votes} </span>
            <button onClick={() => updateVote(anecdote)}>vote</button>
          </div>
        </div>
      ): null}
    </div>
  ) 
}

export default AnecdoteList;