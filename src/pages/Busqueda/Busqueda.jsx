// import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import NavBar from "../../components/layout/NavBar/NavBar";
import FiltersBusqueda from "../../components/filtersBusqueda/FiltersBusqueda";
import Cards from "../../components/cards/Cards";

export default function Busqueda() {
  return (
    <Layout>
      <NavBar />
      <FiltersBusqueda />
      <Cards noTitle={true} />
    </Layout>
  );
}
