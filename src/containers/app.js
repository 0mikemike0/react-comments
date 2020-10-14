import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';

import { addTodo, removeTodo} from '../actions';


let App = (props) => {
  const {
    todos, addTodo, removeTodo
  } = props;

  return (
    <div>
      <TodoList todos={todos} removeTodo={removeTodo} />
      <AddTodo addTodo ={addTodo}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (name, text) => dispatch(addTodo(name, text)),
    removeTodo: (id) => dispatch(removeTodo(id))
  }
}

App = connect (
  mapStateToProps,
  mapDispatchToProps
)(App);



export default App;