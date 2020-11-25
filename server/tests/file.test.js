const request = require('supertest');
const app = require('../app');

describe('GET /api/file/*', () => {
    it('responds with file from path.', () => {
        return request(app)
            .get('/api/file/TRASH/Joji   SLOW DANCING IN THE DARK.mp3')
            .set('Accept', 'application/json')
            .set('dbx-token', process.env.DBX_TOKEN)
            .expect(200)
    });
});

describe('GET /api/file/*', () => {
    it('responds with file not found.', () => {
        return request(app)
            .get('/api/file/')
            .set('Accept', 'application/json')
            .set('dbx-token', process.env.DBX_TOKEN)
            .expect(404)
    });
});

describe('GET /api/file/*', () => {
    it('responds with file not found.', () => {
        return request(app)
            .get('/api/file/TRASH/nonexist.mp3')
            .set('Accept', 'application/json')
            .set('dbx-token', process.env.DBX_TOKEN)
            .expect(404)
    });
});

describe('GET /api/file/*', () => {
    it('responds with unauthorized', () => {
        return request(app)
            .get('/api/file/TRASH/Joji   SLOW DANCING IN THE DARK.mp3')
            .set('Accept', 'application/json')
            .set('dbx-token', 'bad.token.pls.crash')
            .expect(401)
    });
});

describe('GET /api/file/*', () => {
    it('responds with unauthorized', () => {
        return request(app)
            .get('/api/file/TRASH/Joji   SLOW DANCING IN THE DARK.mp3')
            .set('Accept', 'application/json')
            .set('dbx-token', '')
            .expect(401)
    });
});
