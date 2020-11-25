const request = require('supertest');
const app = require('../app');

const { deleteAllUsers } = require('../models/users');
const { deleteAllFavorites } = require('../models/favorites');

describe('GET /api/me', () => {
    it('responds with user information.', async() => {
        await deleteAllFavorites();
        await deleteAllUsers();
        return await request(app)
            .get('/api/me')
            .set('Accept', 'application/json')
            .set('dbx-token', process.env.DBX_TOKEN)
            .expect(200)
    });
});

describe('GET /api/me', () => {
    it('responds with unauthorized', async() => {
        await deleteAllFavorites();
        await deleteAllUsers();
        return await request(app)
            .get('/api/me')
            .set('Accept', 'application/json')
            .set('dbx-token', 'bad.token.pls.crash.help')
            .expect(401)
    });
});

describe('GET /api/me', () => {
    it('responds with unauthorized', async() => {
        await deleteAllFavorites();
        await deleteAllUsers();
        return await request(app)
            .get('/api/me')
            .set('Accept', 'application/json')
            .set('dbx-token', '')
            .expect(401)
    });
});