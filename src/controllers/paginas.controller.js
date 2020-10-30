import { Opinion } from '../models/Opiniones.js';
import { Viaje } from '../models/Viaje.js';

export const paginaInicio = async (req, res) => {
  try {
    const resp = await Promise.all([
      Viaje.findAll({ limit: 3 }),
      Opinion.findAll({ limit: 3 }),
    ]);

    res.render('inicio', {
      pag: 'Inicio',
      clase: 'home',
      viajes: resp[0],
      opiniones: resp[1],
    });
  } catch (error) {
    console.log('Hubo un error al obtener los viajes', error);
  }
};

export const paginaNosotros = (req, res) => {
  res.render('nosotros', {
    pag: 'Nosotros',
  });
};

export const paginaViajes = async (req, res) => {
  // Consultando la db
  const viajes = await Viaje.findAll();

  res.render('viajes', {
    pag: 'Próximos Viajes',
    viajes,
  });
};

export const paginaOpiniones = async (req, res) => {
  try {
    const opiniones = await Opinion.findAll();

    res.render('opiniones', {
      pag: 'Opiniones',
      opiniones,
    });
  } catch (error) {
    console.log('Hubo un error al obtener la información', error);
  }
};

export const paginaDetallesViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render('viaje', {
      pag: viaje.titulo,
      viaje,
    });
  } catch (error) {
    console.log('Hubo un error al obtener los detalles', error);
  }
};
