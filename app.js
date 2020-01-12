const app = require('./config/server');


// let rotaMain = require('./app/routes/main');
// rotaMain(app);


var port = process.env.PORT || 3000;
app.listen(port, () => {
    // console.log('Umbler listening on port %s', port);
});