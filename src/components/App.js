import React, { Component } from 'react'
import TruthButton from './TruthButton'
import Brick from '../containers/containerBrick'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  handleGetTruth = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.onGetTruth().then(() => {
      this.setState({loading: false})
    });
  }
  render() {
    return (

      <div className = "AppGrid">

        {this.props.activeTruth.map((n)=>
          <div className = "AppGridElement" key={n.id}>
            <Brick
              truth={n.truth}
              brickID={n.id}
            />
          </div>
        )}
        <div className="AppGridElement">
          <TruthButton
            loading={this.state.loading}
            onClick={this.handleGetTruth}
          />
        </div>
      </div>

    );
  }

}

export default App;
