const nombre = "Martin";
const edad = 21;
const EsDesarrollador = true;
const fechaNacimiento = new Date(2001, 7, 3);

const LibroFavorito = {
    titulo: "La caida de los gigantes",
    autor: "Ken Follet",
    fecha: new Date(1987, 3, 2),
    url: "MarquetPlace.com"
}

const lista = new Array(nombre, edad, EsDesarrollador, fechaNacimiento, LibroFavorito.autor, LibroFavorito.fecha, LibroFavorito.titulo, LibroFavorito.url);

console.log(lista);