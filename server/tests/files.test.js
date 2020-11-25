const request = require('supertest');
const app = require('../app');

describe('GET /api/files/*', () => {
    it('responds with files within /', () => {
        return request(app)
            .get('/api/files/')
            .set('Accept', 'application/json')
            .set('dbx-token', process.env.DBX_TOKEN)
            .expect(200)
    });
});

describe('GET /api/files/*', () => {
    it('responds with files within /MALUMA/', () => {
        return request(app)
            .get('/api/files/MALUMA/')
            .set('Accept', 'application/json')
            .set('dbx-token', process.env.DBX_TOKEN)
            .expect(200)
    });
});

describe('GET /api/files/*', () => {
    it('responds with files within /MALUMA', () => {
        return request(app)
            .get('/api/files/path/that/does/not/exist/')
            .set('Accept', 'application/json')
            .set('dbx-token', process.env.DBX_TOKEN)
            .expect(400)
    });
});

describe('GET /api/files/*', () => {
    it('responds with no files', () => {
        return request(app)
            .get('/api/files/path/that/does/not/exist/')
            .set('Accept', 'application/json')
            .set('dbx-token', process.env.DBX_TOKEN)
            .expect(400)
    });
});

describe('GET /api/files/*', () => {
    it('responds with no files', () => {
        return request(app)
            .get('/api/files/MALUMA/Taquito')
            .set('Accept', 'application/json')
            .set('dbx-token', process.env.DBX_TOKEN)
            .expect(400)
    });
});

describe('GET /api/files/*', () => {
    it('responds with unauthorized', () => {
        return request(app)
            .get('/api/files/')
            .set('Accept', 'application/json')
            .set('dbx-token', 'bad.token.pls.crash')
            .expect(401)
    });
});

describe('GET /api/files/*', () => {
    it('responds with unauthorized', () => {
        return request(app)
            .get('/api/files/')
            .set('Accept', 'application/json')
            .set('dbx-token', '')
            .expect(401)
    });
});

