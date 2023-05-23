const request = require('supertest');
const app = require('../src/app');
const SECONDS = 1000;
jest.setTimeout(70 * SECONDS);

describe("#Teste da API - módulo User", () => {
    it("Teste método POST User", async () => {
        const res = await request(app)
        .post('/v1/users')
        .send({
            idControl: 'TEST',
            firstName: 'TEST',
            lastName: 'TEST',
            email: 'TEST',
            birthday: '2000-10-10',
            password: 'TEST',
            levelUser: 1,
            googleAccount: false,
            photo: 'TEST',
        });
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método GET User", async () => {
        const res = await request(app)
        .get('/v1/users');
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método PUT User", async () => {
        const res = await request(app)
        .put('/v1/users/TESTE')
        .send({
            idControl: 'TEST',
            firstName: 'TEST',
            lastName: 'TEST',
            email: 'TEST',
            birthday: '2000-10-10',
            password: 'TEST',
            levelUser: 1,
            googleAccount: false,
            photo: 'TEST',
        });
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método DELETE User", async () => {
        const res = await request(app)
        .delete('/v1/users/TESTE');
        expect(res.statusCode).toEqual(200);
    });
});

describe("#Teste da API - módulo Course", () => {
    it("Teste método POST Course", async () => {
        const res = await request(app)
        .post('/v1/courses')
        .send({
            idControl: 'TEST',
            nameCourse: 'TEST',
            description: 'TEST',
            level: 1,
            area: 1,
        });
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método GET Course", async () => {
        const res = await request(app)
        .get('/v1/courses');
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método PUT Course", async () => {
        const res = await request(app)
        .put('/v1/courses/TESTE')
        .send({
            idControl: 'TEST',
            nameCourse: 'TEST',
            description: 'TEST',
            level: 1,
            area: 1,
        });
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método DELETE Course", async () => {
        const res = await request(app)
        .delete('/v1/courses/TESTE');
        expect(res.statusCode).toEqual(200);
    });
});

describe("#Teste da API - módulo Tutorial - Rota de exceção", () => {
    it("Teste método GET Tutorial", async () => {
        const res = await request(app)
        .get('/v1/tutorials');
        expect(res.statusCode).toEqual(200);
    });
});

describe("#Teste da API - módulo Library - Rota de exceção", () => {
    it("Teste método GET Library", async () => {
        const res = await request(app)
        .get('/v1/libraries');
        expect(res.statusCode).toEqual(200);
    });
});

describe("#Teste da API - módulo Group", () => {
    it("Teste método POST Group", async () => {
        const res = await request(app)
        .post('/v1/groups')
        .send({
            idControl: 'TEST',
            groupName: 'TEST',
            subject: 'TEST',
            description: 'TEST',
        });
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método GET Group", async () => {
        const res = await request(app)
        .get('/v1/groups');
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método PUT Group", async () => {
        const res = await request(app)
        .put('/v1/groups/TESTE')
        .send({
            idControl: 'TEST',
            groupName: 'TEST',
            subject: 'TEST',
            description: 'TEST',
        });
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método DELETE Group", async () => {
        const res = await request(app)
        .delete('/v1/groups/TESTE');
        expect(res.statusCode).toEqual(200);
    });
});

describe("#Teste da API - módulo FreeClass", () => {
    it("Teste método POST FreeClass", async () => {
        const res = await request(app)
        .post('/v1/freeclasses')
        .send({
            idControl: 'TEST',
            nameClass: 'TEST',
            description: 'TEST',
            level: 1,
            subject: 1,
            linkYoutube: 'TEST',
        });
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método GET FreeClass", async () => {
        const res = await request(app)
        .get('/v1/freeclasses');
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método PUT FreeClass", async () => {
        const res = await request(app)
        .put('/v1/freeclasses/TESTE')
        .send({
            idControl: 'TEST',
            nameClass: 'TEST',
            description: 'TEST',
            level: 1,
            subject: 1,
            linkYoutube: 'TEST',
        });
        expect(res.statusCode).toEqual(200);
    });
    it("Teste método DELETE FreeClass", async () => {
        const res = await request(app)
        .delete('/v1/freeclasses/TESTE');
        expect(res.statusCode).toEqual(200);
    });
});