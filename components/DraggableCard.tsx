import { decodeAction } from "next/dist/server/app-render/entry-base";
import Image from "next/image";
import React from "react";

const DraggableCard: React.FC = ({
    card,
    index,
    onDragStart,
    onDragOver,
    onDrop,
    SetSelectedCard,
    selectedCard
  }: any) => {
  
  
  
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      onDragStart(index);
      e.dataTransfer.setData("index", String(index));
    };
  
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      onDragOver(index);
    };
  
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      const droppedIndex = parseInt(e.dataTransfer.getData("index"));
      onDrop(droppedIndex);
    };
  
    return (
      <div
      onClick={()=>{SetSelectedCard(index)}}
        className={`draggable-card ${selectedCard === index?'':'box'} `}
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Image
          src={card.image}
          height={50}
          width={50}
          alt=""
          className="h-[200px] w-[200px]"
        />
        {card.title.slice(0, 20) + "..."}
      </div>
    );
  };


  export default DraggableCard