export default function Radio({
  id,
  name,
  value,
  labelText,
  selected,
  setSelected,
}) {
  return (
    <>
      <input
        className="hidden"
        type="radio"
        id={id}
        name={name}
        value={value}
        onClick={() => setSelected(id)}
      />
      <label
        className={`mx-4 flex w-1/4 gap-4 rounded-full ${
          selected === id ? "bg-primary_500" : "bg-primary_100"
        }  p-2 px-3 pr-6 shadow-md shadow-neutral-500`}
        for={id}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
          width="22px"
          alt=""
        />
        <span>{labelText}</span>
      </label>
    </>
  );
}
