const borrow = require("../Models/borrow");

module.exports = {
  postBorrow: (req, res) => {
    const body = {
      ...req.body,
      rent_at: new Date(),
      return_at: new Date()
    };

    borrow
      .postBorrow(body)
      .then(response => res.json(response))
      .catch(error => console.log(error));
  }
};
