// Para habilitar los import se agrega en el package.justify-content-around
// "type": "module"
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import db from './config/db.js';
import router from './routes/index.js';

// Varibales de entorno
dotenv.config();

const app = express();

// Conexión a la db
db.authenticate()
  .then(() => console.log('Conexión exitosa a Postgres'))
  .catch((error) => console.log('Error de conexión a Postgres', error));

// Configuraciones
app.set('views', './src/views'); // Estableciendo la carpeta de las vistas
app.set('view engine', 'pug');
app.use(express.static('./src/public')); // Definiendo la carpeta pública
app.use(express.urlencoded({ extended: true })); // Leer datos del formulario
app.use(morgan('dev'));

// Variables locales
app.use((req, res, next) => {
  res.locals.anio = new Date().getFullYear();
  res.locals.sitio = 'Agencia de Viajes';
  next();
});

// Rutas
app.use('/', router);

app.listen(process.env.PORT, () =>
  console.log(`Servidor en puerto ${process.env.PORT}`)
);
