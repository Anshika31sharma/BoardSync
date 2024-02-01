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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
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
                      className={`flex items-center justify-between w-10  py-4 mb-6 border-b-4 ${"border-[#5030E5]"} ${"border-[#FFA500]"}  ${"border-[#8BC48A]"}`}
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
                                {/* {item.content} */}
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
                                      />
                                      <img
                                        src={item.content.images[1]}
                                        width="100%"
                                      />
                                    </div>
                                  ) : (
                                    <img src={item.content.images[0]} />
                                  )}

                                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 pt-4">
                                    <div className="flex items-center">
                                      <img
                                        src={inviteOne}
                                        className="w-6 h-6"
                                      />
                                      <img
                                        src={inviteTwo}
                                        className="-ml-2 w-6 h-6"
                                      />
                                      <img
                                        src={inviteThree}
                                        className="-ml-2 w-6 h-6"
                                      />
                                    </div>

                                    <span className="flex items-center justify-start lg:justify-center ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-[#787486]"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                        />
                                      </svg>
                                      <span className="text-[#787486] pl-1 text-xs font-medium leading-4 tracking-normal text-left">
                                        <span>{item.content.comments} </span>{" "}
                                      
                                      </span>
                                    </span>

                                    <span className="flex items-center justify-start lg:justify-end ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-[#787486]"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                        />
                                      </svg>

                                      <span className="text-[#787486] pl-1 text-xs font-medium leading-4 tracking-normal text-left">
                                        <span>{item.content.files}</span> 
                                      </span>
                                    </span>
                                  </div>
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
