import { FaBeer } from "react-icons/fa";
import ButtonMd from "../../components/buttons/button-md/ButtonMd";
import { useState } from "react";
import ModalLayout from "../../components/modals/ModalLaout/ModalLayout";
import { Link } from "react-router-dom";

export default function () {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1 className="mb-8 flex flex-col items-center justify-center bg-primary_50 font-bold text-red-500">
        REact Icon
        <FaBeer className="text-center text-9xl" />
      </h1>
      <ButtonMd text="Log In" onClick={handleClick} lg />
      {showModal && (
        <ModalLayout
          title={"Petagram"}
          subtitle={"estrenando nuevo modal para petagram"}
          textButton="Aceptar"
          handleClick={handleClick}
          handleClickClose={closeModal}
        >
          hola como estas
        </ModalLayout>
      )}

      <Link to={"/About"}>About </Link>
    </div>
  );
}
