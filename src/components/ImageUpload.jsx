import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import CircularProgress from 'material-ui/CircularProgress';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      value: 0
    };
    this._handleImageChange = this._handleImageChange.bind(this);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    // console.log(reader);
    let file = e.target.files[0];

    // if (reader.readyState === 1) {
    //   this.setState({ thick: 4 });
    // }
    // if (reader.readyState === 0) this.setState({ thick: 4 });

    reader.onprogress = e => {
      if (e.lengthComputable) {
        var progress = parseInt(e.loaded / e.total * 100, 10);
        this.setState({ value: progress });
        // console.log(e.loaded);
      }
    };

    reader.onloadstart = e => {
      // this.setState({ thick: 10 });
      console.log('started');
    };

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
      this.props.onLoadImage(this.state.imagePreviewUrl);
    };

    reader.readAsDataURL(file);
  }

  handleClick = () => {
    document.getElementById('selectFile').click();
    // this.setState({ thick: 4 });
  };

  render() {
    let { imagePreviewUrl } = this.state;

    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img src={imagePreviewUrl} alt="profile" width="120px" height="150px" />
      );
    } else {
      $imagePreview = (
        <div
          style={{
            width: '140px',
            height: '160px',
            backgroundColor: 'powderblue',
            opacity: '0.6',
            display: 'inline-block'
          }}
        />
      );
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input
            type="file"
            id="selectFile"
            onChange={this._handleImageChange}
            style={{ display: 'none' }}
          />
          <RaisedButton
            label="Upload Photo"
            primary={true}
            onClick={this.handleClick}
          />
          {/* <CircularProgress mode="determinate" value={this.state.value} /> */}
        </form>
        <br />
        <div>
          {this.state.value === 0 ? (
            'No Picture yet'
          ) : (
            <span>{this.state.value}% loaded..</span>
          )}
        </div>
        {$imagePreview}
      </div>
    );
  }
}

export default ImageUpload;
