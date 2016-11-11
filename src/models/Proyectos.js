import mongoose from 'mongoose';

let proyectosSchema = new mongoose.Schema({
  codigo: String
});

export default mongoose.model('Proyectos', todoSchema);