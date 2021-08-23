import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
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
      <DragDropContext onDragEnd={e => console.log(e)}>
        <Droppable>
          //
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
