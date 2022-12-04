//import { async } from "@firebase/util";
import { collection, doc, setDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseFirestore } from "./firebase";

const crearProducto = async (producto) => {
  const nuevoDoc = doc(collection(FirebaseFirestore, "/productos"));
  await setDoc(nuevoDoc, producto); //llamado asincrono a firebase
  console.log("producto creado");
};

const listarProductos = async () => {
  console.log("aqui");
  const productosRef = collection(FirebaseFirestore, "/productos");
  //arreglo de documentos de la coleccion de productos
  const docs = await getDocs(productosRef); //llamado a la base de datos firestore
  const productos = [];
  docs.forEach((document) => {
    console.log(document.id, document.data());
    productos.push({
      id: document.id,
      nombre: document.data().nombre,
      descripcion: document.data().descripcion,
      direccion: document.data().direccion,
      imagen: document.data().imagen,
    });
  });
  console.log(productos);
  return productos;
};

export { crearProducto, listarProductos };
