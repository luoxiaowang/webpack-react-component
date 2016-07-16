import React, {Component} from 'react';
var ButtonActions = require('../../actions/flux/ButtonActions');
var ListStore = require('../../stores/flux/ListStore');
var MyButton = require('./MyButton');

class MyButtonController extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: ListStore.getAll()
    }
  }

  componentDidMount(){
    let self = this;
    ListStore.addChangeListener(self._onChange.bind(this));
  }

  componentWillUnmount(){
    let self = this;
    ListStore.removeChangeListener(self._onChange.bind(this));
  }

  _onChange(){
    this.setState({
      items: ListStore.getAll()
    });
  }

  createNewItem(){
    ButtonActions.addNewItem('new item');
  }

  render(){
    return <MyButton items={this.state.items} onClick={this.createNewItem}/>
  }

}

module.exports = MyButtonController;