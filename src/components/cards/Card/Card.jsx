export default function Card({ title, image }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg p-4">
      <img
        src={image}
        className=" rounded-lg object-cover md:h-44 md:w-44 lg:h-72 lg:w-72"
        alt="image"
      />
      <h1 className="font-subtitle text-primary_700">{title}</h1>
    </div>
  );
}
