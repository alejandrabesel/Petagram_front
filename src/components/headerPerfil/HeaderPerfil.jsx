import { RiSettings3Line } from "react-icons/ri";
export default function HeaderPerfil({
  name,
  publications,
  followers,
  following,
  image,
  user,
}) {
  return (
    <div className="mb-4 flex w-full flex-col items-center justify-center gap-8 md:flex-row">
      <img
        src={image}
        alt="perfil"
        className="h-44 w-44 rounded-full border-2 border-primary_500 object-cover "
      />
      <div className=" flex w-1/2 flex-col">
        <div className="mb-8 flex w-full flex-col items-center justify-between hover:text-primary_500 md:flex-row">
          <h1 className="font-title text-4xl text-primary_700">{name}</h1>
          <button className="flex items-center gap-2 hover:text-primary_500">
            <span>Editar Perfil</span> <RiSettings3Line className="text-2xl" />
          </button>
        </div>
        <div className="mb-8 flex w-full flex-col justify-between md:flex-row">
          <span>{publications} publicaciones</span>
          <span>{followers} seguidores</span>
          <span>{following} Seguidores</span>
        </div>
        <h2 className="text-left">{user}</h2>
      </div>
    </div>
  );
}
