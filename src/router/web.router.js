const express = require("express");
const HomeController = require("../controller/home.controller");
const router = express.Router();
const BooksModel = require("../model/books.model");

router.get("/books/create", (req, res) => {
  res.render("create");
});

router.get("/books", async (req, res) => {
  let results = await HomeController.getAllBooks().catch((err) => {
    console.log(err);
  });
  res.render("index", { books: results });
});

router.post("/books/create", async (req, res) => {
  let book = req.body;
  await BooksModel.addBooks(
    book.name,
    book.price,
    book.author,
    book.status
  ).catch((err) => {
    console.log(err);
  });
  res.redirect("/books");
});

router.get("/books/:id/delete", async (req, res) => {
  const bookID = req.params.id;
  await BooksModel.deleteBookByID(bookID).catch((err) => {
    console.log(err);
  });
  res.redirect("/books");
});

router.get("/books/:id/update", async (req, res) => {
  const bookID = req.params.id;
  let result = await BooksModel.selectBookByID(bookID).catch((err) =>
    console.log(err.mesage)
  );
  res.render("update", { books: result[0] });
});

router.post("/books/:id/update", async (req, res) => {
  const bookID = req.params.id;
  let result = req.body;
  await BooksModel.updateBook(
    bookID,
    result.name,
    result.price,
    result.author,
    result.status
  );
  res.redirect("/books");
});

module.exports = router;
