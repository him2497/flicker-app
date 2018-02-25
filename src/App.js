import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions'
import {Paper} from 'material-ui';


//REDUX State and Dispatch Methods
const mapStateToProps = (state) => ({ images: state });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      isLoading:true,
      images: '',
      tag: null
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (text) => {
    this.setState({ tag: text.target.value })
  }

  handleSubmit(state){
    console.log(this.state.tag)
    this.props.getImages(this.state.tag)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flicker Clone App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Paper style={style} zDepth={5} >
          <img src="https://webkit.org/demos/srcset/image-src.png"/>
        </Paper>


        <input onChange={this.onChange}></input>
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
