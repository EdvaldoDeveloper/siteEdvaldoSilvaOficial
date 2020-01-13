var mysql = require('mysql');

var comMySQL = () => {
    console.log('Conexão com bd foi estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'edvaldos_edvaldosilva',
        password: 'pr06390721',
        database: 'edvaldos_db'
    });
    
}
module.exports = () => {
    console.log('O autoload carregou o modulo de conexão com bd');
    return comMySQL;

}