
const express = require('express');
const RenderPage = require('./render');
const { check, sanitizeBody } = require('express-validator');
const Validation = require('../lib/validator');
const ValidationUser = require('../lib/ControllerValidator');
const router = express.Router();

router.get('/', RenderPage.MainPage);
router.get('/empleo', RenderPage.EmpleoPage);
router.get('/acerca', RenderPage.AcercaPage);
router.get('/covid', RenderPage.CovidPage);
router.get('/legal', RenderPage.LegalPage);
router.get('/termino-de-uso', RenderPage.TermPage);
router.get('/contacto', RenderPage.ContactoPage);

router.post('/message', Validation.form,ValidationUser.validateForm);

module.exports = router;




