import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

// connect redux to const app
// 1 - define mapStateToProps
// 2 - define mapDispatchToProps
// 3 - connect higher order component from react-redux

function CakeContainer(props) {
  return (
    <div>
      <h1>Number of cakes - {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}
// read in docs about 'selectors'

/**
 * @param state
 * @return Obj
 * purpose:  To access the Redux state in the component
 */
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  }
}

/**
 * @param dispatch
 * @ return Obj
 * purpose: Maps action creators to props
 */
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  }
}

// Connects the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
