const UserController = require('./controllers/UserController')
const DrinkController = require('./controllers/DrinkController')

module.exports = (app) => {
    /* RESFUL Api for users management */
    
    // create user
    app.post('/user', UserController.create)

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId', UserController.remove)

    // get user by id
    app.get('/user/:userId', UserController.show)

    // get all user
    app.get('/users', UserController.index)
}
module.exports = (app) => {
    app.get('/drinks', DrinkController.index)
    app.get('/drink/:id', DrinkController.show)
    app.post('/drink', DrinkController.create)
    app.put('/drink/:id', DrinkController.update)
    app.delete('/drink/:id', DrinkController.delete)
}
