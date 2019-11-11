const express = require('express')
const Router = express.Router()
const bookController = require('../Controllers/book')

Router.get('/', bookController.getAll)
Router.get('/genre/:genre', bookController.getByGenre)
Router.get('/status/:status', bookController.getByStatus)
Router.post('/add', bookController.postBook)
Router.put('/:id', bookController.updateBook)
Router.delete('/:id', bookController.deleteBook)

module.exports = Router