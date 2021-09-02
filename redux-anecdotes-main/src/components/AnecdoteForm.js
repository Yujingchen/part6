import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdoteThunk } from '../reducers/anecdoteReducer'

const AnecdoteForm =  () => {
  const dispatch = useDispatch()
  const createNewAnecdote = async (event) => {
    event.preventDefault()
    const anecdoteValue = event.target.anecdote.value
    dispatch(addAnecdoteThunk(anecdoteValue))
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