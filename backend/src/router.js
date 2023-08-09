const express = require('express');
const router = express.Router();
const pessoasController = require('./controllers/pessoasController');
const pessoasMiddleware = require('./middlewares/pessoasMiddleware');

router.get('/pessoas', pessoasController.getAll)
router.post('/pessoas', pessoasMiddleware.validaBody, pessoasController.criaPessoa)
router.delete('/pessoas/:id', pessoasController.deletaPessoa)
router.put('/pessoas/:id', pessoasMiddleware.validaBody, pessoasController.atualizaPessoa)

module.exports = router;