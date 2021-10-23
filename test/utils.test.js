const utils = require('../utils');
const moment = require('moment');
const db = require('../db/db.json');

const mockedDB = {
    username: 'Fabric',
    password: 'password1',
    isAuthenticated: true
};

test('returns current date', () => {
    const date = moment().format('MMMM Do YYYY, h:mm:ss a')
    expect(utils.getCurrentDateTime()).toBe(date);
});

test('stores correct data values in db', () => {
    expect(utils.storeUserData(mockedDB)).toMatchObject(db);
});

test('returns Booelan value', () => {
    expect(utils.checkIfAuthenticated()).toBeTruthy();
});

test('returns correct username from db', () => {
    expect(utils.retrieveUserData()).toBe('Fabric');
});

test('returns correct current working directory', () => {
    expect(utils.getCwd()).toBe(process.cwd());
});