const bookModel = require('../Models/book')

module.exports = {
    getAll: (req, res) => {
        bookModel.getAll()
            .then(response => res.json(response))
            .catch(error => console.log(error))
    },

    getByGenre: (req, res) => {
        const bookGenre = req.params.genre
        bookModel.getByGenre(bookGenre)
            .then(response => res.json(response))
            .catch(error => console.log(error))
    },

    getByStatus: (req, res) => {
        const bookStatus = req.params.status
        bookModel.getByStatus(bookStatus)
            .then(response => res.json(response))
            .catch(error => console.log(error))
    },

    postBook: (req, res) => {
        const body = {
            ...req.body,
            created_at: Date.now(),
            updated_at: Date.now(),
        }

        bookModel.postBook(body)
            .then(response => res.json(response))
            .catch(error => console.log(error))
    },

    updateBook: (req, res) => {
        const body = {
            ...req.body,
            created_at: Date.now(),
            updated_at: Date.now(),
        }
        const id = req.params.id
        bookModel.updateBook(body, id)
            .then(response => res.json(response))
            .catch(error => console.log(error))
    },

    deleteBook: (req, res) => {
        const bookDelete = req.params.id
        bookModel.deleteBook(bookDelete)
            .then(response => res.json(response))
            .catch(error => console.log(error))
    }
}