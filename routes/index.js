const path = require('path');

module.exports = app => {

    app.get('*', (req, res) => {
        return res.sendFile(path.join(__dirname, '../src/login.html'));
    })

}