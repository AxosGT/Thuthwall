import { connect } from 'react-redux'
import { deleteTruth } from '../actions/index'
import Brick from '../components/Brick'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (brickID)=>{
      dispatch(deleteTruth(brickID))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Brick)
