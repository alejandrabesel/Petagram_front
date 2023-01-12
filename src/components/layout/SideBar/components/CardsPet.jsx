import { useState } from "react";
import CardPet from "./CardPet";

export default function CardsPet({ pets, petSelectedModal, selectPetModal }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-around overflow-y-auto">
      {pets.map((pet) => (
        <CardPet
          key={pet.id}
          pet={pet}
          selectPetModal={selectPetModal}
          selected={petSelectedModal !== null && petSelectedModal.id === pet.id}
        />
      ))}
    </div>
  );
}
