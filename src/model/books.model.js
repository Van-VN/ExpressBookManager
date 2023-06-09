const BaseModel = require("./base.model");

class BooksModel extends BaseModel {
  async addBooks(name, price, author, status) {
    let sql = `INSERT INTO BOOKS(NAME,PRICE,STATUS,AUTHOR) VALUES('${name}',${price},'${status}','${author}')`;
    return await this.querySQL(sql);
  }

  async getAllBooks() {
    let sql = `SELECT * FROM BOOKS`;
    return await this.querySQL(sql);
  }

  async deleteBookByID(id) {
    let sql = `DELETE FROM BOOKS WHERE ID = ${id}`;
    return await this.querySQL(sql);
  }

  async selectBookByID(id) {
    let sql = `SELECT * FROM BOOKS WHERE ID = ${id}`;
    return await this.querySQL(sql);
  }

  async updateBook(id, name, price, author, status) {
    let sql = `UPDATE BOOKS SET NAME = '${name}', PRICE = ${price},AUTHOR = '${author}',STATUS = '${status}' WHERE ID = ${id}`;
    return await this.querySQL(sql);
  }
}

module.exports = new BooksModel();
