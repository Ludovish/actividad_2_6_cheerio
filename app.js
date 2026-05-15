const express = require('express');
const rutaCherio = require('./src/routes/rutaScrapping');
const app = express();
const PORT = 3000;

//Esto hace que express pueda leer el JSON
app.use(express.json());

//Le da la ruta al url base.
app.use('/api', rutaCherio);

//el listen abre el sv
app.listen(PORT, () => {
    console.log(`Server corriendo en http://localhost:3000/api/scrape`);
});