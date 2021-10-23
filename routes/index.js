const path = require('path');
const utils = require('../utils');

module.exports = app => {

    // api routes
    app.post('/api', async (req, res, next) => {
        try {
            await utils.storeUserData(req.body);
            res.sendStatus(200);
        } catch (err) {
            next(err);
        }
    });

    app.post('/api/logout', async (req, res, next) => {
        try {
            await utils.logOutUser(req.body);
            res.sendStatus(200);
        } catch (err) {
            next(err);
        }
    });

    app.get('/api/user', async (req, res, next) => {
        try {
            const results = await utils.retrieveUserData();
            res.json({ data: results });
        } catch (err) {
            next(err);
        }
    });

    app.get('/api/date-time', async (req, res, next) => {
        try {
            const results = await utils.getCurrentDateTime();
            res.json({ data: results });
        } catch (err) {
            next(err);
        }
    });

    app.get('/api/directory', async (req, res, next) => {
        try {
            const results = await utils.getCwd();
            res.json({ data: results });
        } catch (err) {
            next(err);
        }
    });

    // view routes
    app.get('/info', async (req, res, next) => {
        try {
            const isAuthenticated = await utils.checkIfAuthenticated();
            isAuthenticated ? res.sendFile(path.join(__dirname, '../src/info.html')) : res.redirect('/');
        } catch (err) {
            next(err);
        }
    });

    app.get('*', async (req, res) => {
        return res.sendFile(path.join(__dirname, '../src/login.html'));
    });

}