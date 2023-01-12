import { useState } from "react";

export default function CardPet({ pet, selectPetModal, selected }) {
  return (
    <button
      onClick={() => selectPetModal(pet)}
      className={`flex w-full items-center justify-around rounded-xl ${
        selected ? "bg-primary_500" : "bg-primary_300"
      }  p-2 hover:bg-primary_500 hover:text-primary_50`}
    >
      <img
        className="h-28 w-28 rounded-xl object-cover"
        src={pet.image}
        alt={pet.name}
      />
      <div>
        <h1 className="font-subtitle text-2xl">{pet.name}</h1>
      </div>
    </button>
  );
}
