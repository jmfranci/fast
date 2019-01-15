const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
	res.send('Bem vindo ao FAST. Encontre tudo que é necessário para tratar qualquer tipo de documento em Angola');
});

module.exports = router;