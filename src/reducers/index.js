const todos = (state = [], action) => {
  
  switch (action.type) {
  
    case 'ADD_TODO':
      return [
        ...state,
        { id: action.id, name: action.name, text: action.text, date: (new Date()).toLocaleDateString()}
      ];

    case 'REMOVE_TODO': 
      return [...state].filter(todo => todo.id !== action.id);
    
    default:
      return state;  
  
    }

}

export default todos;
