const BooksModel = require("../model/books.model");

class HomeController {
  async displayHome(req, res) {
    let results = await BooksModel.addBooks().catch((err) => {
      console.log(err);
    });
    res.render("index", { books: results });
  }

  async getAllBooks(req, res) {
    return await BooksModel.getAllBooks().catch((err) => {
      console.log(err);
    });
  }
}

module.exports = new HomeController();
