const UserController = require('./controllers/UserController');
const DrinkController = require('./controllers/DrinkController');

module.exports = (app) => {
    // --- User routes ---
    app.post('/user', UserController.create);
    app.put('/user/:userId', UserController.put);
    app.delete('/user/:userId', UserController.remove);
    app.get('/user/:userId', UserController.show);
    app.get('/users', UserController.index);

    // --- Drink routes ---
    app.get('/drinks', DrinkController.index);
    app.get('/drink/:id', DrinkController.show);
    app.post('/drink', DrinkController.create);
    app.put('/drink/:id', DrinkController.update);
    app.delete('/drink/:id', DrinkController.delete);
};
