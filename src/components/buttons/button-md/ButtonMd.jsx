export default function ButtonMd({ onClick, text, danger }) {
  return (
    <>
      <button
        className={`${
          danger
            ? "bg-red-500 hover:bg-red-400"
            : "bg-primary_500 hover:bg-primary_400"
        } text-md h-10 w-24 rounded-2xl
        font-bold text-white shadow-md shadow-primary_800`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
