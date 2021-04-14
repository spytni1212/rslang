import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import _ from "lodash";

const onDragEnd = (result, columns, setColumns, colorBoard) => {
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
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
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
        items: copiedItems,
      },
    });
  }
};

const grid = 8;

const getListStyle = (isDraggingOver, colorBoard) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  minHeight: "70px",
  width: "90vw",
  display: "flex",
  padding: grid,
  borderRadius: "20px",
  flexWrap: "wrap"
});

const getListWordStyle = (isDraggingOver) => ({
  background: "none",
  minHeight: "70px",
  width: "100%",
  display: "flex",
  padding: grid,
  flexWrap: `wrap`,
  jusctyfyContent: "center", 
});

const getItemStyle = (isDragging, draggableStyle) => ({
  padding: "0.8em",
  height: "fit-content",
  boxShadow: "2px 2px 7px 2px #b4b4c7",
  border: "2px #0000002b solid",
  borderRadius: "10px",
  outline: "none",
  cursor: "pointer",
  background: isDragging ? "lightgreen" : "#f3d7e6",
  ...draggableStyle,
});

function BoardsC({ Boards, changeBoards, colorBoard, setButtonCheck}) {
  const [columns, setColumns] = useState(Boards);

  useEffect(() => {
    setColumns(Boards);
  }, [Boards]);

  useEffect(() => {
    if (columns.BoardWords.items.length === 0) {
      changeBoards(columns);
      return;
    } else {
      setButtonCheck(false)
    }
  }, [columns]);

  const clickButton = (item) => {
    const RequestedItems = _.cloneDeep(columns.Requested.items);
    const BoardWordsItems = _.cloneDeep(columns.BoardWords.items);

    const haveItemBoardWords = BoardWordsItems.map((x) => {
      return x.id;
    }).indexOf(item.id);
    console.log(BoardWordsItems.map((x) => {
      return x.id;
    }).indexOf(item.id))
    const haveRequestedItems = RequestedItems.map((x) => x.id).indexOf(item.id);

    if (haveItemBoardWords > -1) {
      BoardWordsItems.splice(haveItemBoardWords, 1);
      RequestedItems.push(item);
    } else if (haveRequestedItems !== -1) {
      RequestedItems.splice(haveRequestedItems, 1);
      BoardWordsItems.push(item);
    }

    setColumns({
      ...columns,
      BoardWords: { ...columns.BoardWords, items: BoardWordsItems },
      Requested: { ...columns.Requested, items: RequestedItems },
    });
  };

  return (
    <div style={{width: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              key={columnId}
            >
              <h4>{column.name}</h4>
              <div style={{ margin: 8 }}>
                <Droppable
                  droppableId={columnId}
                  key={columnId}
                  direction="horizontal"
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={
                          column.style === "requested"
                            ? getListStyle(snapshot.isDraggingOver, colorBoard)
                            : getListWordStyle(snapshot.isDraggingOver)
                        }
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
                                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                      onClick={() => {
                                        clickButton(item);
                                      }}
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
  );
}

export default BoardsC;
