Información del proceso:

1-Creación de carpeta, luego se utilizaron los comandos para importar node:
	npm init -y
	npm install mysql2
	npm install ejs
	npm install express ejs mysql2 express-session
    npm install express cheerio axios

2-creación de carpetas src con todas sus sub-carpetas en base a lo solicitado.

3-Se eligio usar un archivo local como fuente de HTML y se creo 'index.html'
	-En index.html se hicieron unas lineas básicas con datos para que el scrapper lo extraiga, colocamos
	 un nombre, un precio y una cantidad, 3 datos basicos en 3 instancias.
	
4-En la carpeta 'services' se creo 'serviciosCherio.js'
	-se importaron las cosas importantes como la ruta al index y los componentes node.
	-se creo la función 'scrapping' que es la que se encarga de obtener los datos del index y modificarlos
	 para que se puedan acceder a ellos, los transforma en un objeto y los añade a una lista que el controlador controla.