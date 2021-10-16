import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes, updateAnecdote } from '../reducers/anecdoteReducer'
import { clearNotification, setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux';


const AnecdoteList = (props) => {
  const dispatch = useDispatch()
  const anecdotes = props.anecdotes

  useEffect(() => {
    props.initializeAnecdotes()
  },[])

  const updateVote = async (anecdote) => {
    props.updateAnecdote(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`)
    props.clearNotification(5)
  }

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

const mapStateToProps = (state) => {
  if (state.filter) {
    const anecdotes = state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    return {
      anecdotes: anecdotes,
      filter: state.filter
    }
  }
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNotification: (message) => {
      dispatch(setNotification(message))
    },
    clearNotification: (delay) => {
      dispatch(clearNotification(delay))
    },
    initializeAnecdotes: () => {
      dispatch(initializeAnecdotes())
    },
    updateAnecdote: (anecdote) => {
      dispatch(updateAnecdote(anecdote))
    }
  }
}



const ConnectedAnecdoteList = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AnecdoteList);

export default ConnectedAnecdoteList;