import React, {Component} from 'react';

class DeleteButton extends Component {

    render() {
      return (
          <button
            className="Button"
            type="button"
            onClick = {this.props.onClick} >
            ✖
          </button>
      );
    }
}

export default DeleteButton;
