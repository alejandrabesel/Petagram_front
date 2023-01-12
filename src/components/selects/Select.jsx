import { useState } from "react";

export default function Select({ array, id, defaultValue }) {
  const [selected, setSelected] = useState("0");
  const handleChange = (e) => {
    e.preventDefault();

    setSelected(e.target.value);
  };
  return (
    <div className={`relative mx-4 w-1/4`}>
      <select
        className={` rounded-full  ${
          selected !== "0" ? "bg-primary_500" : "bg-neutral-200"
        } w-full bg-none p-2 px-3 outline-none`}
        name=""
        id=""
        onChange={(e) => handleChange(e)}
      >
        <option value="0">{defaultValue}</option>
        {array.map((opt, index) => (
          <option value={opt.id}>{opt.value}</option>
        ))}
      </select>
      <span className="absolute top-2 right-5">▼</span>
    </div>
  );
}
