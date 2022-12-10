import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { listarProductos } from "./productosService";

export const Restaurant = () => {
  const [productos, setProductos] = useState([]);

  //se ejecuta para cargar los productos en ventana Restaurant por una unica vez
  useEffect(() => {
    getProductos();
  }, []); //los[] patron observados ampliar tema

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
  };
  return (
    <div className="container-fluid mt-4">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {productos.map((producto) => {
          return (
            <div className="col" key={producto.id}>
              <div className="card border-dark">
                <img src={producto.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title card-title-custom">
                    {producto.nombre}
                  </h5>
                  <p className="card-text">{producto.direccion} </p>
                  <p className="card-text">{producto.descripcion} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
