import Layout from "../../components/layout/Layout";
import NavBar from "../../components/layout/NavBar/NavBar";
import Tab from "../../components/layout/SideBar/components/Tab";
import { BsGear } from "react-icons/bs";
import { IoPawOutline } from "react-icons/io5";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function PanelUsuario() {
  // const auxUser = {
  //   id: 1,
  //   name: "Fabi",
  //   email: "fabi@mail.com",
  //   createdAt: "2023-01-12T09:48:44.394Z",
  //   updatedAt: "2023-01-12T09:48:44.394Z",
  //   adminId: null,
  // };

  const [currentTab, setCurrentTab] = useState(1);
  const { pets, userLogged } = useSelector((state) => state.user);
  const [inputs, setInputs] = useState({
    name: userLogged.name,
    email: userLogged.email,
  });

  const [allowEdit, setAllowEdit] = useState(false);

  // useEffect(()=>{

  // }, [userLogged])
  return (
    <Layout>
      <NavBar />
      <div className="flex justify-center">
        <div className="flex w-11/12 justify-center rounded-xl bg-white py-3">
          <div className="w-3/12 border-r-2 border-primary_700">
            <Tab
              handleClick={() => setCurrentTab(1)}
              titleSize="md"
              title={"Editar perfil usuario"}
            >
              <BsGear className="text-2xl" />
            </Tab>
            <Tab
              handleClick={() => setCurrentTab(2)}
              titleSize="md"
              title={"Mascotas"}
            >
              <IoPawOutline className="text-2xl" />
            </Tab>
          </div>
          {currentTab === 1 && (
            <div className=" flex w-9/12 flex-col items-center gap-2 py-2">
              <div className=" flex w-8/12 gap-2">
                <label className="inline-block w-4/12 text-right" for="name">
                  Nombre
                </label>
                <input
                  disabled={!allowEdit}
                  className="w-8/12 border-b-2 border-b-primary_300 outline-none disabled:border-b-neutral-500"
                  id="name"
                  type="text"
                  value={inputs.name}
                />
              </div>
              <div className="flex w-8/12 gap-2">
                <label className="inline-block w-4/12 text-right" for="email">
                  Email
                </label>
                <input
                  disabled={!allowEdit}
                  className="w-8/12 border-b-2 border-b-primary_300 outline-none disabled:border-b-neutral-500"
                  id="email"
                  type="text"
                  value={inputs.email}
                />
              </div>
              <div className="mt-3">
                <button
                  onClick={() => setAllowEdit(!allowEdit)}
                  className="rounded-xl bg-secondary_300 p-2 hover:bg-secondary_400"
                >
                  {allowEdit ? "Confirmar cambios" : "Editar datos"}
                </button>
              </div>
            </div>
          )}
          {currentTab === 2 && (
            <div className="flex w-9/12 flex-col items-center gap-2 text-neutral-800">
              <div className="flex w-11/12 flex-col items-center gap-2 rounded-xl bg-neutral-200 py-2">
                {pets.length > 0 ? (
                  pets.map((pet) => (
                    <div className="flex w-64 justify-between rounded-xl bg-primary_200 p-2 text-white">
                      <div className="flex items-center gap-3">
                        <img
                          src={pet.image}
                          alt=""
                          className="rounded-full"
                          width="40px"
                        />
                        <h1>
                          {pet.name.slice(0, 1).toUpperCase() +
                            pet.name.slice(1)}
                        </h1>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="rounded-lg p-1 hover:bg-blue-500">
                          <AiOutlineEdit className="text-xl" />
                        </button>
                        <button className="rounded-lg p-1 hover:bg-red-500">
                          <AiOutlineDelete className="text-xl" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No se encontraron mascotas</h1>
                )}
              </div>
              <div>
                <button className="rounded-xl bg-green-400 p-2 hover:bg-green-500">
                  A??adir mascota
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
