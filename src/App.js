import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(initialState{
    "todo": {
      title: "Todo",
      items: []
    },
    "in-progress": {
      title: "In Progress",
      items: []
    },
    "done": {
      title: "Completed",
      items: []
    }
  })
  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
