import React, { useState, useEffect } from "react";
import { listarProductos } from "./productosService";
import Swal from "sweetalert2";

const Search = () => {
  const [valoresFormulario, setValoresFormulario] = useState({});
  const { nombre = "" } = valoresFormulario;
  const [resultado, setResultado] = useState([]);
  const [productos, setProductos] = useState([]);

  // se le asigna los valores del formulario a la variable de estado formValues

  const handleOnChange = (e) => {
    // console.log(e);
    console.log(e.target.name, e.target.value);

    if (e.target.name === "nombre") {
      setValoresFormulario({ ...valoresFormulario, nombre: e.target.value });
    }
    console.log(valoresFormulario);
  };
  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    try {
      Swal.fire({ allowOutsideClick: false, Text: "Cargando..." });
      Swal.showLoading();
      const productosFirabase = await listarProductos();
      setProductos(productosFirabase);
      Swal.close();
    } catch (error) {
      Swal.close();
      console.log(error);
    }
    console.log(productos);
  };
  // para pintar los valores de formulario cuando da click al boton
  const handleOnSubmit = (e) => {
    e.preventDefault(); // evita que se recargue el formulario
    console.log("estoy haciendo click");
    const filtro = productos.filter((hshshs) =>
      hshshs.nombre.toUpperCase().includes(nombre.toUpperCase())
    );
    console.log(resultado);
    setResultado(filtro);
    //los[] patron observados ampliar tema
  };
  return (
    <div className="container-fluid mt-3">
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Escriba nombre del restaurante</label>
          <input
            required
            type="text"
            name="nombre"
            value={nombre}
            className="form-control"
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      <div className="row mt-3">
        <div className="col">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {resultado.map((asasas) => {
              return (
                <div className="col" key={asasas.id}>
                  <div className="card">
                    <img
                      src={asasas.imagen}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{asasas.nombre}</h5>
                      <p className="card-text">{asasas.direccion}</p>
                      <p className="card-text">{asasas.descripcion}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Search };
