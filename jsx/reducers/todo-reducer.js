import * as ToDoActionTypes from '../actiontypes/todo-actions.js'

const initalState = TODO

export default function TodoReducer(state = initalState, action) {
  switch (action.type) {
    case ToDoActionTypes.ADD_TODO:
      index ++ 
      return [
        ...state,
        {
          title: action.name,
          date: new Date(),
          completed: false,
          id: index,
        }
      ];

    case ToDoActionTypes.REMOVE_TODO:
      return [
        ...state.slice(0,action.index),
        ...state.slice(action.index + 1)
      ];

    case ToDoActionTypes.CHANGE_STATE_TODO:
      return state.map((todo,index) => {
        if(index == action.index){
          return {
            ...todo,
            completed: action.bool
          };
        }
        return todo;
      });

    default:
      return state;
  }
}
