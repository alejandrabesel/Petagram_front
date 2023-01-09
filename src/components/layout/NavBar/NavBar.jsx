import { Link } from "react-router-dom";
import ButtonMd from "../../buttons/button-md/ButtonMd";

export default function NavBar() {
  const handleClick = () => {
    alert("accion iniciar sesion");
  };
  return (
    <div className="flex h-12 w-full items-center justify-end gap-4 py-8 px-4">
      <Link className="font-semibold text-primary_700">Register</Link>
      <ButtonMd text="Log in" md onClick={handleClick} />
    </div>
  );
}
