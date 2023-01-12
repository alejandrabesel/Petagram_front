// import { logo } from "../../../../public/logo.png";
import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getUserLogged } from "../../../redux/actions/userActions";
import ModalLayout from "../../modals/ModalLaout/ModalLayout";
import CardsPet from "./components/CardsPet";
export default function SideBar() {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, logout, user } = useAuth0();
  const { userLogged, pets } = useSelector((state) => state.user);
  //mascota perfil activo
  const [petLogged, setPetLogged] = useState(null);
  const [showModalPerfil, setShowModalPerfil] = useState(false);
  const dispatch = useDispatch();
  //pet seleccionado en el modal
  const [petSelectedModal, setPetSelectedModal] = useState(null);
  const selectPetModal = (pet) => {
    setPetSelectedModal(pet);
  };

  const confirmPetLogged = () => {
    setPetLogged(petSelectedModal);
    openCloseModalPerfil();
  };
  useEffect(() => {
    isAuthenticated &&
      dispatch(getUserLogged({ name: user.name, email: user.email }));
  }, [user]);

  useEffect(() => {
    setPetLogged(pets[0]);
  }, [userLogged, pets]);

  const openCloseModalPerfil = () => {
    setShowModalPerfil(!showModalPerfil);
  };
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
            <Tab titleSize="xl" title={"Home"}>
              <RiHome3Line className="text-3xl " />
            </Tab>
            <Tab titleSize="xl" path="/Busqueda" title={"Busqueda"}>
              <RiSearchLine className="text-3xl" />
            </Tab>
            <Tab titleSize="xl" title={"Notificationes"}>
              <FiHeart className="text-3xl" />
            </Tab>
            <Tab titleSize="xl" title={"Post"}>
              <RiAddBoxLine className="text-3xl" />
            </Tab>
          </div>
          <div className="flex flex-col gap-4 pb-4">
            {/* ############ perfil de mascota #####################  */}
            {isAuthenticated ? (
              petLogged && (
                <Tab
                  titleSize="xl"
                  title={petLogged.name}
                  handleClick={openCloseModalPerfil}
                >
                  <img
                    src={petLogged.image}
                    className="h-8 w-9 rounded-full border border-primary_700 object-cover"
                    alt="perfil"
                  />
                </Tab>
              )
            ) : (
              <Tab titleSize="xl" title={"Perfil"}>
                <img
                  src="./perfil.jpg"
                  className="h-8 w-9 rounded-full border border-primary_700 object-cover"
                  alt="perfil"
                />
              </Tab>
            )}

            <Tab titleSize="xl" path="/PanelUsuario" title={"Panel de Usuario"}>
              <RiUser3Line className="text-2xl" />
            </Tab>
            {isAuthenticated && (
              <Tab
                titleSize="xl"
                title={"Log Out"}
                handleClick={() => logout()}
              >
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
      {showModalPerfil && (
        <ModalLayout
          textButton="Elegir"
          title="Tus mascotas"
          subtitle={"Seleccione el perfil de mascota que desea acceder"}
          handleClick={confirmPetLogged}
        >
          <div className="h-full w-full">
            {pets.length !== 0 && (
              <CardsPet
                pets={pets}
                selectPetModal={selectPetModal}
                petSelectedModal={petSelectedModal}
              />
            )}
          </div>
        </ModalLayout>
      )}
    </div>
  );
}
