import { produceWithPatches } from "immer";
import { useEffect, useState } from "react";

/**
 * component loading, este podra variar su tamaño al pasarle por prop el tamaño deseado
 * sm=35 md=70 lg=170 xl=270
 * lanzara un error si se pasa mas de una propiedad o ninguna
 * example <Loadin sm /> <Loading md />
 *
 * @returns ReacComponents
 */
export default function ({ sm, md, lg, xl }) {
  const [size, setSize] = useState("");

  useEffect(() => {
    const props = [sm, md, lg, xl].filter((e) => typeof e !== "undefined");

    console.log(props);
    if (props.length > 1)
      throw new Error(
        "Error Component Landing: you just have to choose a size, sm or md or ..."
      );
    if (props.length === 0)
      throw new Error(
        "Error component Landing: Not foun size, you should be set component size"
      );
    setSize(sm ? "35" : md ? "70" : lg ? "170" : "270");
  }, []);

  return (
    <div className="my-2 flex w-full justify-center rounded-md  border border-red-500 bg-white  px-4 py-5 text-center shadow sm:rounded-lg">
      <a className="bg-white">
        <img src="/loading.svg" alt="loading..." width={size} height="100" />
      </a>
    </div>
  );
}
