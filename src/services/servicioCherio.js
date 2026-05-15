//Recolector de datos.

const cheerio = require('cheerio'); //Libreria principal
const fs = require('fs'); //file system de Node
const path = require('path'); //manejo de rutas Node

const scrapping = () => {
    try {
        const ruta = path.join(__dirname,'../../index.html'); //---Se añadio dirname para que sea absoluto.
        //Esto hace que pueda llegar al archivo

        if (!fs.existsSync(ruta)) {
            throw new error('No se encontro el archivo');
            //Error por si no encuentra el archivo usando el file system
        }

        const contenidoPagina = fs.readFileSync(ruta, 'UTF-8');
        //Hacemos que lea el archivo
        const $ = cheerio.load(contenidoPagina);     //---Error arreglado
        //Le hace parse para poder manipularlo
        const productosList = [];

        //Acá se coloca cada valor que en el html tenga la clase asignada
        //En el caso mio es "obtener" el nombre de la clase
        $('.obtener').each((index, element) => {
            const producto = {
                nombre: $(element).find('.nombre').text().trim(),
                precio: $(element).find('.precio').text().trim(),  //---Faltaban '.' en las clases
                cantidad: $(element).find('.cantidad').text().trim() //--Se añadio el .text().trim() porque si no tiraba error.
            };
            //Esto crea un objeto de lo que obtiene dle html usando las clases
            
            productosList.push(producto);
            //Y esto lo guarda adentro de la lista
        });
        //Resumen de la función: Agarra todo lo que le pedimos dle html y lo guarda en una lista.

        if (productosList.length === 0){
            throw new error('No se logro añadir nada a la lista');
        } //Si la función esta mal hecha este error debería salir.

        return productosList;

    } catch (er) {
        throw er;
    }
}

module.exports = {scrapping};
    //---Se movio la exportación afuera.