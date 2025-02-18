import Header from "../components/Header";

const NotFound = () => {
  return (
    <>
    <Header />
      <div className="notFound">
        <h2>La pagina a la que intentas acceder no existe. </h2>
        <p>Error 404</p>
        <i className="fa-solid fa-circle-exclamation fa-2xl"></i>
      </div>
    </>
  );
};

export default NotFound;
