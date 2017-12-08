import React, {Component} from 'react';

class TruthButton extends Component {
    render() {
      return (
          <button
            className="FancyButton"
            type="button"
            disabled={this.props.loading}
            onClick = {this.props.onClick} >
            <div className={`FancyButtonSpinner ${this.props.loading ? '' : 'hidden'}`}></div>
            <div className={`FancyButtonText ${this.props.loading ? 'hidden' : ''}`}>+Truth</div>
          </button>
      );
    }
}

export default TruthButton;
