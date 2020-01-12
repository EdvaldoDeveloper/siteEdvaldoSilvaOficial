var mysql = require('mysql');

var comMySQL = () => {
    console.log('Conexão com bd foi estabelecida');
    return mysql.createConnection({
        host: 'mysql669.umbler.com',
        user: 'edvaldofullstack',
        password: 'pr6390721social4904',
        database: 'my_stack'
    });
    
}
module.exports = () => {
    console.log('O autoload carregou o modulo de conexão com bd');
    return comMySQL;

}