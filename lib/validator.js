const { check,sanitizeBody } = require('express-validator');
exports.form = [
  // first Name validation
  check('name').trim().notEmpty().withMessage('Nombre Requerido')
  .matches(/^[a-zA-Z ]*$/).withMessage('Nombre Incorrecto Solo se aceptan Caracteres'),
  // email address validation
  check('email').notEmpty().withMessage('Email Requirido').normalizeEmail().isEmail().withMessage('Ingrese un Gmail Valido'),
  //zip
  check('zip').notEmpty().isPostalCode('US').withMessage('Codigo Postal Invalido')
 
]

