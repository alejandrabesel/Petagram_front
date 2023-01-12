import React from "react";
import { useState } from "react";
import { TbPaw } from "react-icons/tb";
import { FaCat, FaDog } from "react-icons/fa";
import { BiBone } from "react-icons/bi";

const Reactions = () => {
  const [selected, setSelected] = useState({
    paw: false,
    cat: false,
    bone: false,
    dog: false,
  });

  const clickHandler = (name) => {
    const auxSelect = selected[name];
    setSelected({
      ...selected,
      [name]: !auxSelect,
    });
  };
  return (
    <div className=" flex h-14 rounded-b-xl bg-white p-4">
      <div className="mx-2">
        <TbPaw
          name="paw"
          id="paw"
          onClick={() => {
            clickHandler("paw");
          }}
          className={`h-8 w-8 ${
            selected.paw
              ? " text-secondary_600"
              : " text-neutral_600 hover:text-secondary_600"
          }`}
        />
      </div>
      <div className="mx-2">
        <FaCat
          name="cat"
          id="cat"
          onClick={() => {
            clickHandler("cat");
          }}
          className={`h-7 w-7 ${
            selected.cat
              ? " text-secondary_600"
              : " text-neutral_600 hover:text-secondary_600"
          }`}
        />
      </div>
      <div className="mx-2">
        <BiBone
          name="bone"
          id="bone"
          onClick={() => {
            clickHandler("bone");
          }}
          className={`h-7 w-7 ${
            selected.bone
              ? " text-secondary_600"
              : " text-neutral_600 hover:text-secondary_600"
          }`}
        />
      </div>
      <div className="mx-2">
        <FaDog
          name="dog"
          id="dog"
          onClick={() => {
            clickHandler("dog");
          }}
          className={`h-7 w-7 ${
            selected.dog
              ? " text-secondary_600"
              : " text-neutral_600 hover:text-secondary_600"
          }`}
        />
      </div>
    </div>
  );
};

export default Reactions;
