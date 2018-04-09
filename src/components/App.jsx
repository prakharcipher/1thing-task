import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  renderInfo() {
    const inf = JSON.parse(sessionStorage.data || 'null');
    return (
      <div>
        {inf !== null &&
        inf.name !== '' &&
        inf.email !== '' &&
        inf.phone !== '' &&
        inf.photo !== '' ? (
          <div
            style={{
              width: '30%',
              height: '187.5px',
              margin: 'auto',
              marginTop: '10%',
              border: '4px solid gray',
              borderRadius: '4px',
              backgroundColor: 'powderblue',
              opacity: '0.8',
              boxShadow: '5px 5px 10px 5px black'
            }}
          >
            <img
              src={inf.photo}
              alt="profile"
              width="150px"
              height="187.5px"
              style={{
                display: 'inline-block',
                float: 'left',
                borderRight: '2px solid gray'
              }}
            />
            <div
              style={{
                display: 'inline-block',
                marginLeft: '2%',
                marginTop: '5%'
              }}
            >
              <div>
                <b>{inf.name}</b>
              </div>
              <br />
              <div>
                <em>{inf.email}</em>
              </div>
              <br />
              <div>{inf.phone}</div>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }

  handleOpen = open => {
    this.setState({ open: open });
  };

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '750px',
          margin: 'auto'
        }}
      >
        <RaisedButton
          label="Play With Form"
          secondary={true}
          onClick={() => this.setState({ open: true })}
          style={{ marginLeft: '44.5%' }}
        />
        <Form open={this.state.open} onHandleClose={this.handleOpen} />
        {this.renderInfo()}
      </div>
    );
  }
}

export default App;
