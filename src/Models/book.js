const db = require("../Configs/db");

module.exports = {
  getAll: () => {
    console.log(`inimi`);
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM book", (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error);
        }
      });
    });
  },

  //searchByTitle
  getByTitle: bookTitle => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM book WHERE title LIKE CONCAT('%',?,'%')",
        [bookTitle],
        (error, response) => {
          if (!error) {
            resolve(response);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  //SearchByGenre
  getByGenre: bookGenre => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM book WHERE genre=?",
        [bookGenre],
        (error, response) => {
          if (!error) {
            resolve(response);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  //SearchByStatus
  getByStatus: bookStatus => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM book WHERE status=?",
        [bookStatus],
        (error, response) => {
          if (!error) {
            resolve(response);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  getBorrow: id_user => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT book.title,book.imgUrl,book.status,user.name FROM transaction JOIN book ON book.id=transaction.id_book JOIN user ON user.user_id=transaction.id_user WHERE transaction.id_user=?",
        [id_user],
        (error, response) => {
          if (!error) {
            resolve(response);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  getWhislist: id_user => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT book.title,book.imgUrl,book.status,user.name FROM transaction JOIN book ON book.id=transaction.id_book JOIN user ON user.user_id=transaction.id_user WHERE transaction.id_user=?",
        [id_user],
        (error, response) => {
          if (!error) {
            resolve(response);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  //POST
  postBook: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO book SET ?", [body], (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error);
        }
      });
    });
  },

  //DELETE
  deleteBook: deleteBook => {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM book WHERE id=?",
        [deleteBook],
        (error, response) => {
          if (!error) {
            resolve(response);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  //UPDATE
  updateBook: (updateBook, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE book SET ? WHERE id =? ",
        [updateBook, id],
        (error, response) => {
          if (!error) {
            resolve(response);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  borrowBook: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO transaction SET ?", [body], (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error);
        }
      });
    });
  },

  whislistBook: body => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO whislist SET ?", [body], (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error);
        }
      });
    });
  }
};
