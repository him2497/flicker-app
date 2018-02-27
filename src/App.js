import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions'
import ImageHolder from './components/ImageHolder'
import {FlatButton, TextField} from 'material-ui'

//REDUX State and Dispatch Methods
const mapStateToProps = (state) => ({ images: state });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      tag: null
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (text) => {
    this.setState({ tag: text.target.value })
  }

  handleSubmit(state){
    this.props.getImages(this.state.tag)
  }


  loadImage(){
    const arr = this.props.images.fetchImages.images;
    let list = []
    console.log(arr);
    for (let i = 0; i< arr.length; i++){
      list.push(<ImageHolder key={i} source={arr[i]} />)
    }
    return list
  }

  componentWillMount(){
    this.handleSubmit('null')
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flicker Clone App</h1>
        </header>
        <div style={{padding: 20}}>

          <TextField
            onChange={this.onChange}
            hintText="Enter"
            fullWidth={true}
            onKeyPress={(e) => {
              //console.log(`Pressed keyCode ${ev.key}`);
              if (e.key === 'Enter') {
                e.preventDefault();
                this.handleSubmit(this.state.tag)
              }
            }}
          />

          <br/>
          <FlatButton
            backgroundColor="light grey"
            label="Search"
            fullWidth={true}
            onClick={this.handleSubmit} />
        </div>
        {this.loadImage()}
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
