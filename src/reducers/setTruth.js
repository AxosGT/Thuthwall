import {SET_TRUTH} from '../actions/index'
import {DELETE_TRUTH} from '../actions/index'

function setTruth(state =  [], action){
  switch (action.type) {
    case SET_TRUTH:
      return [
        ...state,
        {
          id: state.length ? Math.max(...state.map((n)=>n.id)) + 1 : 0,
          truth: action.truth
        }
      ]
    case DELETE_TRUTH:
      return state.filter((n)=>n.id !== action.brickID)
    default:
      return state
  }
}

export default setTruth
