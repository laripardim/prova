const mysql = require('mysql');
const con = mysql.createConnection({
    'user':'root',
    'database':'empresa',
    'host':'localhost'
})

//exportar função
module.exports = {
    con
}