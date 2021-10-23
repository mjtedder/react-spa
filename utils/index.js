const db = require('../db/db.json');
const moment = require('moment');

const getCurrentDateTime = () => {
    const date = new Date();
    const momentDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    return momentDate;
}

const storeUserData = requestBody => {
    if (Object.values(requestBody).includes('Fabric') && Object.values(requestBody).includes('password1')) {
        db.username = requestBody.username;
        db.password = requestBody.password;
        db.isAuthenticated = true;
    }
    return db;
};

const checkIfAuthenticated = () => {
    return db.isAuthenticated;
};

const retrieveUserData = () => {
    return db.username;
};

const getCwd = () => {
    return process.cwd();
};

const logOutUser = requestBody => {
    requestBody.username === db.username ? db.isAuthenticated = false : null
};

module.exports = {
    getCwd,
    storeUserData,
    checkIfAuthenticated,
    retrieveUserData,
    getCurrentDateTime,
    logOutUser
};