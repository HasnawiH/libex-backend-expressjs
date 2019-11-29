const bookModel = require("../Models/book");

module.exports = {
  getAll: (req, res) => {
    bookModel
      .getAll()
      .then(response => res.json(response))
      .catch(error => console.log(error));
  },

  getByTitle: (req, res) => {
    const bookTitle = req.params.title;
    bookModel
      .getByTitle(bookTitle)
      .then(response => res.json(response))
      .catch(error => console.log(error));
  },

  getByGenre: (req, res) => {
    const bookGenre = req.params.genre;
    bookModel
      .getByGenre(bookGenre)
      .then(response => res.json(response))
      .catch(error => console.log(error));
  },

  getByStatus: (req, res) => {
    const bookStatus = req.params.status;
    bookModel
      .getByStatus(bookStatus)
      .then(response => res.json(response))
      .catch(error => console.log(error));
  },

  getBorrow: (req, res) => {
    const borrow = req.params.id_user;
    bookModel
      .getBorrow(borrow)
      .then(response => res.json(response))
      .catch(error => console.log(error));
  },

  getWhislist: (req, res) => {
    const whislist = req.params.id_user;
    bookModel
      .getWhislist(whislist)
      .then(response => res.json(response))
      .catch(error => console.log(error));
  },

  postBook: (req, res) => {
    const body = {
      ...req.body,
      created_at: new Date(),
      updated_at: new Date()
    };

    bookModel
      .postBook(body)
      .then(response => res.json(response))
      .catch(error => console.log(error));
  },

  updateBook: (req, res) => {
    const body = {
      ...req.body,
      updated_at: new Date()
    };
    const id = req.params.id;
    bookModel
      .updateBook(body, id)
      .then(response =>
        res.json({
          msg: `Updated Successfully..`,
          response
        })
      )
      .catch(error => console.log(error));
  },

  deleteBook: (req, res) => {
    const bookDelete = req.params.id;
    bookModel
      .deleteBook(bookDelete)
      .then(response =>
        res.json({
          msg: `Deleted Successfully..`,
          response
        })
      )
      .catch(error => console.log(error));
  },

  postBorrow: (req, res) => {
    const body = {
      ...req.body,
      rent_at: new Date(),
      return_at: new Date()
    };

    bookModel
      .borrowBook(body)
      .then(response => res.json(response))
      .catch(error => console.log(error));
  },

  postWhislist: (req, res) => {
    const body = {
      ...req.body
    };
    bookModel
      .whislistBook(body)
      .then(response => res.json(response))
      .catch(error => console.log(error));
  }
};
