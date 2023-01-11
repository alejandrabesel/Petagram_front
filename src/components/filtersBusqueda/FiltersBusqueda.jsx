import Radio from "../radios/Radio";
import Select from "../selects/Select";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";

export default function FiltersBusqueda() {
  const [filter, setFilter] = useState("");

  const auxArray = [
    {
      id: 1,
      value: "1",
    },
    {
      id: 2,
      value: "2",
    },
    {
      id: 3,
      value: "3",
    },
    {
      id: 4,
      value: "4",
    },
  ];

  return (
    <div>
      <div>
        <div className="py-2">
          <SearchBar placeholder="Buscar por nombre..." />
        </div>
        <div className="flex justify-between py-2">
          <Radio
            selected={filter}
            setSelected={setFilter}
            id="1"
            name="busqueda"
            value=""
            labelText="Buscando pareja"
          />
          <Radio
            selected={filter}
            setSelected={setFilter}
            id="2"
            name="busqueda"
            value=""
            labelText="Buscando paseador"
          />
          <Radio
            selected={filter}
            setSelected={setFilter}
            id="3"
            name="busqueda"
            value=""
            labelText="Me perdí"
          />
          <Radio
            selected={filter}
            setSelected={setFilter}
            id="4"
            name="busqueda"
            value=""
            labelText="En adopcion"
          />
        </div>
        <div className="flex w-full justify-between py-2">
          <Select array={auxArray} defaultValue="Pais" />
          <Select array={auxArray} defaultValue="Provincia" />
          <Select array={auxArray} defaultValue="Localidad" />
          <Select array={auxArray} defaultValue="Especie" />
        </div>
      </div>
    </div>
  );
}
