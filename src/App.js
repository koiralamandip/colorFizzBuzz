import React, {createContext, useReducer, useMemo} from 'react';
import './App.css';
import Main from './components/Main/Main';

// Initial State
// state has an object containing two arrays:
// 1 is available colors out of which sould be selected at random to change the button's color.
// This is kept in state, so that we could define reducer and action to add/remove other colors in future
// 2 is the array that holds the current and previous "changed colors" of the button
const colorState = {
  availableColors: ['red', 'green', 'blue', 'black', 'orange'],
  colors: []
};

// Creating a context to avoid props drilling and still let any deep child components use the state
export const ColorContext = createContext([colorState, ()=> {}]);

// A reducer function that picks a color from available colors array at random 
//and changes the state (or actually say, creates a new state merging previous with the picked color)
const reducerFunction = (state = colorState, action) => {
  if (action.type === 'COLOR_CHANGE'){
    let color = "";
    if (state.colors[state.colors.length - 1] === 'blue'){
      color = 'green';
    }else{
      const index = Math.floor(Math.random() * 4);
      color = state.availableColors[index];
    }
    return {availableColors: [...state.availableColors], colors: [...state.colors, color]}
  }
}

function App() {

  // useReducer hook enables us to use the state and dispatch function
  const [state, dispatch] = useReducer(reducerFunction, colorState);

  return (
    <div className="App">
      {/* Wrapping child components in the Context's Provider component with a default value */}
      {/* The default value is an array of the state and dispatch function, so that any child could access it and dispatch an action */}
      <ColorContext.Provider value={[state, dispatch]}>
        <Main/>
      </ColorContext.Provider>
      </div>
  );
}

export default App;
