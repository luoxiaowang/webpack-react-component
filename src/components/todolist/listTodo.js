import React from 'react';

var ListTodo = React.createClass({

  handleDel : function(e){
    var delIndex = e.target.getAttribute('data-key');
    this.props.todo.splice(delIndex, 1);
    this.props.onDel(this.props.todo);
  },

  render : function(){
    let _this = this;
    return (
      <ul id="todo-list">
        {
          _this.props.todo.map(function (item, i) {
            return (
              <li className="todoItem" key={'todo' + i}>
                <label className="time">{item.time}</label>
                <a className="destroy" onClick={_this.handleDel} data-key={i} href="javascript:;">[delete]</a>
                <label className="title">{item.title}</label>
              </li>
            )
          })
        }
      </ul>
    )
  }

})

export default ListTodo;
