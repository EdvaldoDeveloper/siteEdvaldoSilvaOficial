module.exports = () => {

    this.getContatos = (connection, callback) => {
        connection.query('select * from contatos', callback );
    }

    this.salvarContato = (contato, connection, callback) => {
        connection.query('INSERT INTO CONTATOS SET ?', contato, callback)
    }

    return this;
}