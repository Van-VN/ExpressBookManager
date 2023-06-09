const database = require("./database.js");

class BaseModel {
  constructor() {
    this.connect = database.connectDB();
  }

  querySQL(sql) {
    return new Promise((resolve, rejects) => {
      this.connect.query(sql, (err, result) => {
        if (err) {
          rejects(err.message);
        } else {
          return resolve(result);
        }
      });
    });
  }
}

module.exports = BaseModel;
