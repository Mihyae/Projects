const Database = require("sqlite-async");
//Database.open(__dirname + '/database.sqlite').then(execute)

function execute(db) {
  //console.log(db)
  //criar as tabelas do banco de dados (sem o return antes de db.exec)
  //Para exportar o banco de dados para o text.js é necessário incrementar o return em db.exec
  return db.exec(`

        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTERGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `);
}

//Só irá retornar o banco de dados DEPOIS de executar a função 'execute'
//Para exportar é necessário deixá-lo 'chamável', incluindo module.exports antes da execução.
module.exports = Database.open(__dirname + "/database.sqlite").then(execute);
