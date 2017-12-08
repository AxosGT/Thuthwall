import React, {Component} from 'react'
import DeleteButton from './DeleteButton'

class Brick extends Component {

    render() {
      return (
        <div className="Brick" style={{background:`rgba(0, 0, 0, ${((this.props.brickID%6)+2) *.1})`}}>
          <div className="BrickContent">
            {this.props.truth.map(
              (n, i)=><div key={i}>{n}</div>
            )}
          </div>
          <div className="BrickButton">
            <DeleteButton
              onClick={(e)=>
                {e.preventDefault();
                this.props.onDelete(this.props.brickID)
                }
              }
            />
          </div>
        </div>
      );
    }
}

export default Brick;
