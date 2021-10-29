const path = require('path');
const cors = require('cors');
const utils = require('../utils');

module.exports = app => {

    // api routes
    app.post('/api', cors(), async (req, res, next) => {
        try {
            const results = await utils.storeUserData(req.body);
            res.json({ data: results });
        } catch (err) {
            next(err);
        }
    });

    app.post('/api/logout', async (req, res, next) => {
        try {
            const results = await utils.logOutUser(req.body);
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
}