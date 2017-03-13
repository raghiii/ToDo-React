import * as ToDoActionTypes from '../actiontypes/todo-actions.js'

export const addTODO = name => {
  return {
    type: ToDoActionTypes.ADD_TODO,
    name
  };
};

export const removeTODO = index => {
  return {
    type: ToDoActionTypes.REMOVE_TODO,
    index
  };
};

export const updateTODO = (bool,index) => {
  return {
    type: ToDoActionTypes.CHANGE_STATE_TODO,
    bool,
    index
  }
};
