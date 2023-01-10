import { useEffect, useState } from "react";
import Card from "./Card/Card";

export default function () {
  //const [cards, setCards] = useState([]);
  const cards = [
    {
      title: "Titulo de Imagen",
      url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
    },
    {
      title: "Titulo de Imagen",
      url: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
    },
    {
      title: "Titulo de Imagen",
      url: "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
    },
    {
      title: "Titulo de Imagen",
      url: "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
    },
    {
      title: "Titulo de Imagen",
      url: "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
    },
    {
      title: "Titulo de Imagen",
      url: "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
    },
    {
      title: "Titulo de Imagen",
      url: "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
    },
    {
      title: "Titulo de Imagen",
      url: "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
    },
    {
      title: "Titulo de Imagen",
      url: "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg",
    },
  ];
  useEffect(() => {}, []);
  return (
    <div className="grid  w-full grid-cols-1 justify-center gap-4 p-2  md:grid-cols-2 lg:grid-cols-3">
      {cards.map((e) => (
        <Card key={e.title} title={e.title} image={e.url} />
      ))}
    </div>
  );
}