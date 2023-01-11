export default function SearchBar({ placeholder }) {
  return (
    <div className="mx-3 flex w-1/2 gap-4 rounded-full bg-neutral-200 p-2 pl-3">
      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
          width="25px"
          alt=""
        />
      </button>
      <input
        type="text"
        name=""
        id="search"
        placeholder={placeholder}
        className="w-full bg-neutral-200 outline-none"
      />
    </div>
  );
}
