import React from 'react';

const TodoList = (props) => {
  const { todos, removeTodo } = props;

  return (
    <div>
      <ol>
      {
        todos.map((todo) => {
          
          return (
            <li
              key={todo.id}
            >
              <span>{todo.name + ', ' + todo.date + ':'}</span>
              <div>{todo.text}</div>
              <button onClick = {ev => removeTodo(todo.id)}>{'удалить'}</button>
            </li>
            )

          })
        }

      </ol>
    </div>
  );
   
}

export default TodoList;