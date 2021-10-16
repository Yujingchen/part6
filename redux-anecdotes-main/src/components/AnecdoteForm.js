import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm =  (props) => {
  const createNewAnecdote = async (event) => {
    event.preventDefault()
    const anecdoteValue = event.target.anecdote.value
    props.addAnecdote(anecdoteValue)
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

const mapDispatchToProps = {
  addAnecdote
}

const connectedAnecdoteForm = connect(
  null, 
  mapDispatchToProps
)(AnecdoteForm);

export default connectedAnecdoteForm;