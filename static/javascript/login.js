const userName = document.querySelector(".username");
const passWord = document.querySelector(".password");

// Show an element
const show = (elem) => {
  elem.style.display = "inline";
};

// Hide an element
const hide = (elem) => {
  elem.style.display = "none";
};

// const db = f.read("../../flask_app/database.db");

console.log("HELLO WERLD");

// console.log(db);

// var dbText = db.document;
// console.log(dbText);

// userName.textContent = "DISPLAY USERNAME HERE";

// const sqlite3 = require('sqlite3').verbose();

// // open the database
// let db = new sqlite3.Database('./db/chinook.db');

// let sql = `SELECT DISTINCT Name name FROM playlists
//            ORDER BY name`;

// db.all(sql, [], (err, rows) => {
//   if (err) {
//     throw err;
//   }
//   rows.forEach((row) => {
//     console.log(row.name);
//   });
// });

// // close the database connection
// db.close();
