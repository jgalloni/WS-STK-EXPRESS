/**
 * Importar
 */
import express from 'express';
import logger from 'morgan'; // Logs server request en cosola
import bodyParser from 'body-parser'; // parser de put y post en json
import methodOverride from 'method-override'; // Compatibilidad put y delect con browser viejos
import mongoose from 'mongoose'; // Wrapper de mongodb
import path from 'path'; //

/**
 * Configurar base de datos
 */
mongoose.connect('mongodb://localhost:27017/todoDB'); //TODO: cambiar por variable
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

/**
 * Configurar app
 */
let app = express(); 
app.set('port', process.env.PORT || 3000); // cambiar puerto por parametro
app.set('views', path.join(__dirname, '..', 'views')); 
app.set('view engine', 'jade'); 
app.use(express.static(path.join(__dirname, '..', 'public'))); // Set the static files directory - /public will be / on the frontend
app.use(logger('dev')); // Log requests to the console
app.use(bodyParser.json()); // Parse JSON data and put it into an object which we can access
app.use(methodOverride()); // Allow PUT/DELETE

/**
 * Start app
 */
app.listen(app.get('port'), function() {
  console.log(`App listening on port ${app.get('port')}!`);
});