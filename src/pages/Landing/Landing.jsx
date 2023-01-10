import Cards from "../../components/cards/Cards";
import HeaderPerfil from "../../components/headerPerfil/HeaderPerfil";
import Layout from "../../components/layout/Layout";
import NavBar from "../../components/layout/NavBar/NavBar";

export default function Landing() {
  return (
    <Layout>
      <NavBar />

      <HeaderPerfil image={"./perfil.jpg"} name="Blacky" user={"George"} />

      <Cards />
    </Layout>
  );
}
