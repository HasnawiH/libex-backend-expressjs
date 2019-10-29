const express = require('express')
const Router = express.Router()
const bookController = require('../Controllers/book')

Router.get('/', bookController.getByTitle)
Router.get('/genre/:genre', bookController.getByGenre)
Router.get('/status/:status', bookController.getByStatus)
Router.post('/', bookController.postBook)
Router.put('/', bookController.updateBook)
Router.delete('/', bookController.deleteBook)

module.exports = Router