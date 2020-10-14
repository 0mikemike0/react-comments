import { v4 } from 'node-uuid';


export const addTodo = (name, text) => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    name,
    text
  }
}


export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}