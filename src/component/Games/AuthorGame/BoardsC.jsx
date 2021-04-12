import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

const grid = 8;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  height: '100px',
  width: '100%',
  display: 'flex',
  padding: grid,
  overflow: 'auto',

});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

function BoardsC({ Boards, changeBoards}) {
  const [columns, setColumns] = useState(Boards);

  useEffect(() => {
    setColumns(Boards)
  }, [Boards])

  useEffect(() => {
    if (columns.BoardWords.items.length === 0) {
      changeBoards(columns)
      return 
    }
  }, [columns])

  const clickButton = (id) => {
    console.log('click')
    // const copyColumns = Object.assign({}, columns);
    // const findBordsWords = copyColumns.BoardWords.items.map((obj, index, array) => {
    //   if (obj.id === id) {
    //     return array.splice(index, 1);
    //   }
    //   return obj
    // })
    // console.log(findBordsWords)
    // console.log(copyColumns)
  }

  return (
    <>
      <div style={{ height: "100%" }}>
        Общая
<DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  flexDirection: "row",
                  alignItems: "center",

                  height: '100%'
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId} direction="horizontal">
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={getListStyle(snapshot.isDraggingOver)}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <>
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          padding: "0.8em",
                                          background: "#f3d7e6",
                                          boxShadow: "2px 2px 7px 2px #b4b4c7",
                                          border: "2px #0000002b solid",
                                          borderRadius: "10px",
                                          outline: "none",
                                          cursor: "pointer",
                                          ...provided.draggableProps.style
                                        }}
                                        onClick={() => { clickButton(item.id) }}
                                      >
                                        {item.content}
                                      </div>
                                    </>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </>
  )
}

export default BoardsC;

