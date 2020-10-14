import React from 'react';

const AddTodo = ({ addTodo }) => {
  return (
    <form onSubmit={ev => {
      ev.preventDefault();
      addTodo(ev.target.elements.name.value, ev.target.elements.text.value);
      ev.target.elements.name.value = "";
      ev.target.elements.text.value = "";

    }}>
      <input type="text" name="name" required  />
      <textarea name="text" required />
      <input type="submit" value="Отправить" />
    </form>






    // <input
    //   type="text"
    //   placeholder="введите текст"
    //   onKeyDown={ev => {
    //     if (ev.keyCode === 13) {
    //       addTodo(ev.target.value);
    //       ev.target.value = '';
    //     }
    //   }}
    // />
  )
  
}

export default AddTodo;