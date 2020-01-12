module.exports = (application) => {
    
    application.get('/', (req, res) => {
        res.render("main/index");
    });

    application.post('/contatos/salvar', (req, res) => {
        var contato = req.body;

        var connection = application.config.dbConnection();
        var contatosModel = application.app.models.contatosModel;

        contatosModel.salvarContato(contato, connection, (erro, result) => {
            // res.render("main/index", { contatos: result });
            res.redirect('/');
        }); 

    });
}   