import { createStore } from 'redux';

const actions = {
  UPDATE_QUERY_TEXT: 'UPDATE_QUERY_TEXT',
}

var initialState = {
  searchTerm: '',
  page: ''
};

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);


  switch (action.type) {
    case actions.UPDATE_QUERY_TEXT:
      return Object.assign({}, state, {
        searchTerm: action.value });
    default: return state
  }
}

const store = createStore(reducer);


module.export = { store, actions };
