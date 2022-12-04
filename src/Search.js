import React, { useState } from "react";
import { listaProductos } from "./data-productos";
import { listarProductos } from "./productosService";
import Swal from "sweetalert2";

const Search = () => {
  const [valoresFormulario, setValoresFormulario] = useState({});
  const { nombre = "" } = valoresFormulario;
  const [resultado, setResultado] = useState([]);

  // se le asigna los valores del formulario a la variable de estado formValues

  const handleOnChange = (e) => {
    // console.log(e);
    console.log(e.target.name, e.target.value);

    if (e.target.name === "nombre") {
      setValoresFormulario({ ...valoresFormulario, nombre: e.target.value });
    }
    console.log(valoresFormulario);
  };

  // para pintar los valores de formulario cuando da click al boton
  const handleOnSubmit = (e) => {
    e.preventDefault(); // evita que se recargue el formulario
    console.log("estoy haciendo click");
    const filtro = listaProductos.filter((hshshs) =>
      hshshs.nombre.toUpperCase().includes(nombre.toUpperCase())
    );
    console.log(resultado);
    setResultado(filtro);
  };

  //listaProductos.filter((hshshs) =>
  //hshshs.nombre.toUpperCase().includes(nombre.toUpperCase())
  //);
  //console.log(resultado);
  //setResultado(filtro);

  /*const restaurantes = [
    {
      id: 1,
      nombre: "PACIFICO MAR",
      descripcion:
        "Avenida 85 Nro. 45 - 85 Barranquilla Deliciosa comida de Mar",
      imagen:
        "https://cdn.pixabay.com/photo/2013/07/19/00/18/seafood-165220__340.jpg",
    },
    {
      id: 2,
      nombre: "ITALIANO 65",
      descripcion: "Avenida 45 Nro. 1 - 85 Medellin Deliciosa comida italiana",
      imagen:
        "https://cdn.pixabay.com/photo/2015/01/16/15/01/dinner-601576__340.jpg",
    },
    {
      id: 3,
      nombre: "FRITOS Y MAS",
      descripcion:
        "Calle 45 Medellin La mejor Comida rapida de todo el valle del aburra",
      imagen:
        "https://media.istockphoto.com/id/1356781427/es/foto/las-manos-del-chef-de-primer-plano-cocinan-la-comida-con-fuego-chef-man-quemar-comida-en.jpg?b=1&s=170667a&w=0&k=20&c=aYi8vY4Fv_oMe6IYNFlv35dSbhwrrpBQQeEKIxxsF_w=",
    },
    {
      id: 4,
      nombre: "POLLO FRITO",
      descripcion: "Cr 32 # 56 -89 Lo mejor del pollo frito crocante",
      imagen:
        "https://cdn.pixabay.com/photo/2014/01/24/04/05/fried-chicken-250863__340.jpg",
    },
  ];

  // permite asignar los valores del formulario a la variable de estado  formValues
  const handleOnChange = (e) => {
    setValoresFormulario({
      ...valoresFormulario,
      [e.target.name]: e.target.value,
    });
  };

  // pinta los valores del formulario cuando presionan el boton
  const handleOnSubmit = (e) => {
    e.preventDefault(); // evita que se recargue el formulario
    console.log(valoresFormulario);
    const nuevosRestaurantes = restaurantes.filter((restaurantes) =>
      restaurantes.nombre.toUpperCase().includes(nombre.toUpperCase())
    );
    console.log(nuevosRestaurantes);
  };

  console.log("Estoy en search");

  const nuevosCursos = [];
    for (const curso of cursos) {
        if (curso.creditos >= 3) {
            nuevosCursos.push(curso);
        }
    }
  //const nuevosCursos = cursos.filter(curso => curso.creditos >= 3);
  const nuevosRestaurantes = restaurantes.filter((restaurantes) =>
    restaurantes.nombre.toUpperCase().includes("ING")
  );

  //console.log(cursos, nuevosCursos);*/

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
