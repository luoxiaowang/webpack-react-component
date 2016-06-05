import React from 'react';
import TypeNew from './typeNew';
import ListTodo from './listTodo';
import '../../styles/todolist/style.less';

var TodoList = React.createClass ({

  getInitialState:function(){
    return {
      todolist : []
    }
  },

  handleChange : function(rows){
    this.setState({
      todolist: rows
    })
  },

  render : function(){
    return (
      <div className="todolist">
        {/*
         集成 TypeNews 组件，传入两个属性 onAdd 和 todo
         todo - 将todolist的数据传入到组件，当新增时，更新todolist数据
         onAdd -  将 handleChange 函数传入到组件，新增时，用它来处理最新的todolist数据
         */}
        <TypeNew onAdd={this.handleChange} todo={this.state.todolist}/>
        {/*
         todo - 将todolist的数据传入到组件，用于组件展示数据
         */}
        <ListTodo onDel={this.handleChange} todo={this.state.todolist} />
      </div>
    )
  }

})

export default TodoList;
