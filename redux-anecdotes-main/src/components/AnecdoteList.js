import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdoteAction } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const updateVote = (id) => {
    dispatch(updateAnecdoteAction(id))
  }

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