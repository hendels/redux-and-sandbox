import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SomeComponent from './SomeComponent';

import {bindActionCreators} from 'redux';

import { connect } from 'react-redux';
import {updateUser } from './actions/userActions';
class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
    
  }
//
  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <header className="FlexTest">
        {[1,2,3,4,5,6,7,8,9,0].map(item => {
          return (
          <div key={`item_${item}`} className="someBlock">
            przemy
          </div>
          )
        })}
          <p>
            Przemy Redux Test
          </p>
        </header>
        <input onChange={this.onUpdateUser}/>
        {this.props.user}
        <SomeComponent/>
        <div className="App-header">Update User</div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  // console.log(props)
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.randomProps}`,
  }
}
const mergeProps = (propsFromState, propsFromDispatch, ownPorps) => {
  console.log(propsFromState, propsFromDispatch, ownPorps);
  return {};
}
const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch)
}
export default connect(mapStateToProps, mapActionsToProps)(App);
