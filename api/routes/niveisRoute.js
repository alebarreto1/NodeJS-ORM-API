const { Router } = require('express')
const NivelController = require('../controllers/NivelController.js')

const router = Router()

router.get('/niveis', NivelController.pegaTodosOsNiveis)
router.get('/niveis/:id', NivelController.pegaUmNivel)
router.post('/niveis', NivelController.criaNivel)
router.post('/niveis/:id/restaura', NivelController.restauraNivel)
router.put('/niveis/:id', NivelController.atualizaNivel)
router.delete('/niveis/:id', NivelController.apagaNivel)

module.exports = router