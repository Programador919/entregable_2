import React, { useState } from "react";
import { listaProductos } from "./data-productos";

export const Restaurant = () => {
    const [productos, setProductos] = useState(listaProductos);
    
  return (
    <div className="container-fluid mt-4">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {productos.map((producto) => {
          return (
            <div className="col" key={producto.id}>
              <div className="card border-dark">
                <img src={producto.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
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
