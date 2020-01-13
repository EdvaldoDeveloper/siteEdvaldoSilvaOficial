module.exports = () => {

    this.getContatos = (connection, callback) => {
        connection.query('select * from contatos', callback );
    }

    this.salvarContato = (contato, connection, callback) => {
        connection.query('INSERT INTO contatos SET ?', contato, callback)
    }

    return this;
}