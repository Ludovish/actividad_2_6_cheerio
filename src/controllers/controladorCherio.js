//Este llama la lista y la tiene que devolver.

const servicioCherio = require('../services/servicioCherio');

const getLista = (req, res) => {
    try {
        const datos = servicioCherio.scrapping();

        //El codigo 200 es para res exitosos
        res.status(200).json({
            mensaje: "Todo bien",
            usuario: datos
        });
    } catch (er) {
        //Y el 500 es para fallos
        res.status(500).json({
            error: "hubo error",
            detalle: error.mensaje
        });
    }
};

module.exports = {getLista};