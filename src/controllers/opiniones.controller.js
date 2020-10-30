import { Opinion } from '../models/Opiniones.js';

export const guardarOpiniones = async (req, res) => {
  // Valiar el formulario
  const { nombre, email, mensaje } = req.body;
  const errores = [];

  if (nombre.trim() === '')
    errores.push({ mensaje: 'Debe ingresar su nombre' });
  if (email.trim() === '')
    errores.push({ mensaje: 'Debe ingresar su email válido' });
  if (mensaje.trim() === '')
    errores.push({ mensaje: 'Debe ingresar su opinión' });

  // Mostrando la vista con errres
  if (errores.length > 0) {
    const opiniones = await Opinion.findAll();

    res.render('opiniones', {
      pag: 'Opiniones',
      errores,
      nombre,
      email,
      mensaje,
      opiniones,
    });
  } else {
    try {
      // Guardando la opinión en la db
      await Opinion.create({
        nombre,
        email,
        mensaje,
      });
      res.redirect('/opiniones');
    } catch (error) {
      console.log('Hubo un error al guardar', error);
    }
  }
};
