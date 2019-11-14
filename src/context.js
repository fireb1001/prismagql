import React from "react";

export default React.createContext({
  receipes: []
});

/*
function appReducer(state, action) {
  switch (action.type) {
    case "ADDED":
      return { ...state, added: action.payload };
    default:
      return state;
  }
}
*/
