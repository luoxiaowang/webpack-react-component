import React from 'react';

var TypeNew = React.createClass({

  handleAdd : function(){
    var inputDom = this.refs.inputnew;
    var newthing = inputDom.value.trim();
    var rows = this.props.todo;
    var myDate = new Date();
    var now = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate() + ' ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();
    if (newthing !== '') {
      rows.push({
        title : newthing,
        time : now
      });
      this.props.onAdd(rows);
    }
    inputDom.value = '';
  },

  render : function(){
    return (
      <div>
        <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo" autoComplete="off" />
        <button onClick={this.handleAdd}>submit</button>
      </div>
    )
  }

})

export default TypeNew;
