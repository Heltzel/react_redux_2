import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import action creator
import { buyCake } from '../redux'

// Read in the React-Redux docs about usage warnings of hooks

function HooksCakeContainer() {
  // Hook useSelector equevalent to mapStateToProps()
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  // Hook useDispatch returns a refference to the dispatch function from the Redux store
  // Make sure to import the action creator
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of cakes - {numOfCakes} </h1>
      <button
        onClick={() => {
          dispatch(buyCake())
        }}
      >
        Buy cake
      </button>
    </div>
  )
}

export default HooksCakeContainer
