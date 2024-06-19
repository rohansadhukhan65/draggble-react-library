"use client";
import DraggableCard from "@/components/DraggableCard";
import { fetchProducts } from "@/services/api";
import Image from "next/image";
import React, { useEffect, useState } from "react";


const Page = () => {
  const [cards, setCards] = useState([]);
  const [start, setStart] = useState(0);
  const [droped, setDroped] = useState(0);

  const [selectedCard , setSelectedCard] = useState(null)
  const SetSelectedCard = (index:number) => {
    setSelectedCard(index)
  }
  

  useEffect(() => {
    fetchProducts().then((data) => setCards(data));
  }, []);

  const handleDragStart = (index: number) => {
    // Implement any custom behavior on drag start if needed
    setStart(index);
    console.log("Drag started:", index);
  };

  const handleDragOver = (index: number) => {
    // Implement any custom behavior on drag over if needed
    setDroped(index);
    console.log("Drag over:", index);
  };

  const handleDrop = () => {
    const newCards = [...cards];
    newCards[start] = cards[droped];
    newCards[droped] = cards[start];
    setCards(newCards);
  };

  return (
    <div className="app">
      <h1 className="text-3xl text-center my-5 font-bold">Product Grid</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <DraggableCard
            key={card.id}
            card={card}
            index={index}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            SetSelectedCard={SetSelectedCard}
            selectedCard={selectedCard}
            onDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
