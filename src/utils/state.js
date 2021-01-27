import React from 'react';

// Create new shared context
const AppContext = React.createContext();

// Initial global state
const INIT_STATE = {
  alert: {
    visible: false,
    message: '',
  },
  data: []
}

const reducer = (state, action) => {
  switch (action.type) {
    // When global alert is dismissed
    case 'hide-alert':
      const hide = { ...state };
      hide.alert.visible = false;
      return hide;
    // Show the global alert and receive a message to display
    case 'show-alert': 
      const msg = {
        visible: true,
        message: action.payload
      }
      return {...state, alert: msg};
    // Movies data has been fetched from backend
    case 'data-ready':
      return {...state, data: action.payload};
    default:
      return state;
  }
}

export {
  INIT_STATE,
  reducer,
  AppContext
}