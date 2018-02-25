import React, { Component } from 'react';
import {Paper} from 'material-ui';

class ImageContainer extends Component {

  render(){
    return(
      <Paper style={style.paper}>
        <img src={this.props.source} alt="Images" style={style.img}></img>
      </Paper>
    )
  }

}

const style = {
  paper: {
    height: 200,
    width: 200,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'},
  img: {
    height: 150,
    width: 150,
    padding: 25,
    textAlign: 'center',
    display: 'inline-block'}
};

export default ImageContainer;
