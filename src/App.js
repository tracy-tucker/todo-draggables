import React, { useState } from 'react';
import _ from 'lodash';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';
import {v4} from 'uuid';

const item = {
  id: v4(),
  name: "Clean the house"
}

const item2 = {
  id: v4(),
  name: "Wash the Car"
}

function App() {
  const _ = require('lodash');
  
  const [state, setState] = useState({
    "todo": {
      title: "Todo",
      items: [item, item2]
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
        {_.map(state, (data, key) => {
          return (
            <div key={key} className={"column"}>
              <h3>{data.title}.</h3>
              <Droppable droppableId={key}>
              {(provided) => {
                return (
                  <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={"droppable-col"}
                  >
                    {data.items.map((el, index) => {
                      return (
                        <Draggable key={el.id} index={index} draggableId={el.id}>
                          {(provided) => {
                            return (
                              <div
                                className={"item"}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {el.name}
                              </div>
                            )
                          }}
                        </Draggable>
                      )
                    })}
                  </div>
                )
              }}
            </Droppable>
            </div>
          )
        })}
      </DragDropContext>
    </div>
  );
}

export default App;


// data = the todo Object
// key = the todo/in-progress/done categories