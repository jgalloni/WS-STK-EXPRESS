'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

/**
 * Configurar base de datos
 */
// Compatibilidad put y delect con browser viejos
// Logs server request en cosola
/**
 * Importar
 */
_mongoose2.default.connect('mongodb://localhost:27017/todoDB'); //TODO: cambiar por variable
// Wrapper de mongodb
// parser de put y post en json
_mongoose2.default.connection.on('error', function () {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

/**
 * Configurar app
 */
var app = (0, _express2.default)();
app.set('port', process.env.PORT || 3000); // cambiar puerto por parametro
app.set('views', _path2.default.join(__dirname, '..', 'views'));
app.set('view engine', 'jade');
app.use(_express2.default.static(_path2.default.join(__dirname, '..', 'public'))); // Set the static files directory - /public will be / on the frontend
app.use((0, _morgan2.default)('dev')); // Log requests to the console
app.use(_bodyParser2.default.json()); // Parse JSON data and put it into an object which we can access
app.use((0, _methodOverride2.default)()); // Allow PUT/DELETE

/**
 * Start app
 */
app.listen(app.get('port'), function () {
  console.log('App listening on port ' + app.get('port') + '!');
});