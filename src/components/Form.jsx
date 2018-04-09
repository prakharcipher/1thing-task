import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import ImageUpload from './ImageUpload';
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      photo: '',
      errName: '',
      errMail: '',
      errPhone: '',
      errPhoto: ''
    };
  }

  handleClose = () => {
    this.props.onHandleClose(false);
  };

  handleSubmit = () => {
    if (this.state.name === '') {
      this.setState({ errName: 'Please provide a Name' });
      return null;
    } else this.setState({ errName: '' });
    if (this.state.email === '') {
      this.setState({ errMail: 'Please provide an E-mail' });
      return null;
    } else this.setState({ errMail: '' });
    if (this.state.phone === '') {
      this.setState({ errPhone: 'Please provide a Phone No.' });
      return null;
    } else this.setState({ errPhone: '' });
    if (this.state.photo === '') {
      this.setState({ errPhoto: 'Please select a picture' });
      return null;
    } else this.setState({ errPhoto: '' });
    if (re.test(this.state.email) === false) {
      this.setState({ errMail: 'Invalid E-mail address' });
      return null;
    } else this.setState({ errMail: '' });
    if (this.state.phone.length !== 10) {
      this.setState({ errPhone: 'Invalid Phone No.' });
      return null;
    } else this.setState({ errPhone: '' });
    var info = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      photo: this.state.photo
    };
    sessionStorage.setItem('data', JSON.stringify(info));
    this.setState({ name: '', email: '', phone: '', photo: '' });

    this.props.onHandleClose(false);
  };

  handleImage = link => {
    this.setState({ photo: link });
  };

  render() {
    const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />
    ];
    return (
      <Dialog
        title="Fill The Form"
        actions={actions}
        modal={false}
        onFocus={() => console.log('Dailog')}
        open={this.props.open}
        onRequestClose={this.handleClose}
        autoScrollBodyContent={true}
        titleStyle={{ textAlign: 'center' }}
        // bodyStyle={{ marginLeft: '30%' }}
      >
        <div style={{ marginLeft: '30%' }}>
          <TextField
            errorText={this.state.errName}
            floatingLabelText="Name"
            onChange={event => this.setState({ name: event.target.value })}
          />
          <br />
          <TextField
            errorText={this.state.errMail}
            floatingLabelText="E-mail"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <br />
          <TextField
            errorText={this.state.errPhone}
            floatingLabelText="Phone No."
            onChange={event => this.setState({ phone: event.target.value })}
          />
          <br />
          <br />
          <ImageUpload onLoadImage={this.handleImage} />
          <p style={{ color: 'red' }}>{this.state.errPhoto}</p>
        </div>
      </Dialog>
    );
  }
}

export default Form;
