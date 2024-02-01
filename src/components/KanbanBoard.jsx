import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import inviteOne from "../assets/invite1.png";
import inviteTwo from "../assets/invite2.png";
import inviteThree from "../assets/invite3.png";
import onboardImg from "../assets/1st.jpeg";
import moodbaordOne from "../assets/2nd.jpeg";
import moodbaordTwo from "../assets/3rd.jpeg";
import mobileAppDesign from "../assets/3.jpg";

const toDoItemsFromBackend = [
  {
    id: uuidv4(),
    content: {
    
      description:
        "Old fashioned recipe for preventing allergies and chemical sensitivities.",
      priority: ["Low", "Medium", "High"],
      comments: 12,
     
    },
  },
  {
    id: uuidv4(),
    content: {
       title:"Home Business advertising ideas ",
      description:
        " Successful businesses know the importance of building and maintaining good working.",
      priority: ["Low", "Medium", "High"],
      comments: 0,
    },
  },
  {
    id: uuidv4(),
    content: {
       title:"There is no competition",
      description:
        "Cosmetic surgery abroad making the right choice.",
      priority: ["Low", "Medium", "High"],
      comments: 10,
     
    },
  },
];

const inProgressItemsFromBackend = [
  {
    id: uuidv4(),
    content: {
      title:"Cosmetic surgery abroad making the right choice",
      description: "",
      images: [onboardImg],
      priority: ["Low", "Medium", "High"],
      comments: 14,
      files: 9,
    },
  },
  {
    id: uuidv4(),
    content: {
      title:"Unmatched toner cartridge quality 20 less than oem price",
      description: "",
      images: [moodbaordOne, moodbaordTwo],
      priority: ["Low", "Medium", "High"],
      comments: 15,
      files: 10,
    },
  },
];

const doneItemsFromBackend = [
  {
    id: uuidv4(),
    content: {
     title:"How to look up",
      description: "",
      images: [mobileAppDesign],
      priority: ["Low", "Medium", "High"],
      comments: 12,
      files: 15,
    },
  },
  {
    id: uuidv4(),
    content: {
      title:"Linux or windows which is it",
      description: " Saving money – is something we would all like. ",
      images: [],
      priority: ["Low", "Medium", "High"],
      comments: 12,
      files: 15,
    },
  },
];

const columnsFromBackend = {
  [uuidv4()]: {
    items: toDoItemsFromBackend,
  },
  [uuidv4()]: {
    items: inProgressItemsFromBackend,
  },
  [uuidv4()]: {
    items: doneItemsFromBackend,
  },
};

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

function KanbanBoard() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 mx-2 md:mx-6 lg:mx-10">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightgrey"
                        : "#F5F5F5",
                      padding: 16,
                      width: "100%",
                      minHeight: 500,
                      margin: "5px 0",
                      borderRadius: "0.5rem",
                    }}
                  >
                    {/* Header */}
                    <div
                      className={`flex items-center justify-between w-10 py-4 mb-6 border-b-4 ${"border-[#5030E5]"} ${"border-[#FFA500]"}  ${"border-[#8BC48A]"}`}
                    ></div>
                    {column.items.map((item, index) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  userSelect: "none",
                                  borderRadius: "0.5rem",
                                  margin: "0 0 8px 0",
                                  minHeight: "50px",
                                  color: "white",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                <div className="bg-[#FFFFFF] rounded-lg p-4 my-4">
                                  <h5 className="text-[#0D062D] py-2 text-lg font-semibold leading-5 tracking-normal text-left">
                                    {item.content.title}
                                  </h5>
                                  {item.content.description ? (
                                    <p className="text-[#787486] pb-2 pr-2 text-xs font-normal leading-4 tracking-normal text-left">
                                      {item.content.description}
                                    </p>
                                  ) : item.content.images.length > 1 ? (
                                    <div className="grid grid-cols-2 gap-2 items-center justify-center">
                                      <img
                                        src={item.content.images[0]}
                                        width="100%"
                                        alt="Image 1"
                                      />
                                      <img
                                        src={item.content.images[1]}
                                        width="100%"
                                        alt="Image 2"
                                      />
                                    </div>
                                  ) : (
                                    <img
                                      src={item.content.images[0]}
                                      alt="Single Image"
                                    />
                                  )}
                                  {/* ... (unchanged) */}
                                </div>
                              </div>
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
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default KanbanBoard;
