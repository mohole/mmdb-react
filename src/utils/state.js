import React from 'react';

const AppContext = React.createContext();

const INIT_STATE = {
  alert: {
    visible: false,
    message: '',
  },
  data: [],
  filters: [],
  current: undefined,
  search: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'hide-alert':
      const hide = { ...state };
      hide.alert.visible = false;
      return hide;
    case 'data-ready':
      const newData = {...state};
      newData.data = action.payload;
      newData.filters = action.payload;
      return newData;
    case 'clear-current':
      return Object.assign({}, state, { current: undefined });
    case 'update-current':
      return Object.assign({}, state, { current: action.payload });
    default:
      return state;
  }
}

export {
  INIT_STATE,
  reducer,
  AppContext
}