const request = require('supertest');
const app = require('../app');

describe('GET /api/me', () => {
    it('responds with file from path.', async () => {
        return await request(app)
            .get('/api/me')
            .set('Accept', 'application/json')
            .set('dbx-token', process.env.DBX_TOKEN)
            .expect(200)
    });
});
