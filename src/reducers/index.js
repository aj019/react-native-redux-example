import {ADD_ITEM, REMOVE_ITEM} from '../constants';

const initialState = {
  todos: ['One'],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      let todos = state.todos;
      return Object.assign({}, state, {todos: [...todos, action.payload]});
    case REMOVE_ITEM:
      let todoItemss = state.todos;
      todoItemss.splice(action.payload, 1);
      return Object.assign({}, state, {todos: [...todoItemss]});

    default:
      return state;
  }
}
