//VERBOS HTTP, métodos do express - 4 tipos de verbos
// get - obter dados
// post - enviar dados
// put - atualizar dados 
// delete - remover dados

const router = require('express').Router()

const ProductsController = require('../controllers/products')


router.get('/products', ProductsController.get)
//router.post('/products', ProductsController.post)
//router.put('/products/id:', ProductsController.put)
//router.delete('/products/id:', ProductsController.delete)

module.exports = router