// import { logo } from "../../../../public/logo.png";
import { useState } from "react";
import {
  RiCloseCircleFill,
  RiMenuLine,
  RiHome3Line,
  RiSearchLine,
  RiAddBoxLine,
  RiUser3Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import Tab from "./components/Tab";
import { useAuth0 } from "@auth0/auth0-react";
export default function SideBar() {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, logout } = useAuth0();
  return (
    <div
      className={`md:left-0 ${
        !showMenu ? "-left-full" : "left-0"
      } fixed top-0 z-50 h-full w-80  bg-white`}
    >
      <div className="flex h-full w-full flex-col px-2">
        <img
          className="mb-8 px-5 py-2"
          src="./petagramWhitLogHorizontal.png"
          alt=""
        />
        <div className="flex h-full flex-col justify-between border-r-2 border-primary_700  ">
          <div className="flex flex-col gap-4">
            <Tab title={"Home"}>
              <RiHome3Line className="text-3xl " />
            </Tab>
            <Tab title={"Busqueda"}>
              <RiSearchLine className="text-3xl" />
            </Tab>
            <Tab title={"Notificationes"}>
              <FiHeart className="text-3xl" />
            </Tab>
            <Tab title={"Post"}>
              <RiAddBoxLine className="text-3xl" />
            </Tab>
          </div>
          <div className="flex flex-col gap-4 pb-4">
            <Tab title={"Perfil"}>
              <img
                src="./perfil.jpg"
                className="h-8 w-9 rounded-full border border-primary_700 object-cover"
                alt="perfil"
              />
            </Tab>
            <Tab title={"Panel de Usuario"}>
              <RiUser3Line className="text-2xl" />
            </Tab>
            {isAuthenticated && (
              <Tab title={"Log Out"} handleClick={() => logout()}>
                <RiLogoutBoxRLine className="text-2xl" />
              </Tab>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-2 right-4 md:hidden">
        <button
          className={`rounded-lg ${!showMenu ? "bg-primary_100" : ""}  p-2`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {showMenu ? (
            <RiCloseCircleFill className="text-2xl text-red-500" />
          ) : (
            <RiMenuLine className="text-2xl text-primary_800" />
          )}
        </button>
      </div>
    </div>
  );
}
