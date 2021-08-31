import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdoteAction } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const createNewAnecdote = (event) => {
    event.preventDefault()
    const anecdoteValue = event.target.anecdote.value
    const newAnecdote = anecdoteValue
    dispatch(addAnecdoteAction(newAnecdote))
  }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={createNewAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
        </form>
    </div>
  ) 
}

export default AnecdoteForm;