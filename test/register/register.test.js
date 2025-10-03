const request = require('supertest');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');
const registerFixture = require('../fixtures/register.json');
require('dotenv').config();

describe('/users/register', () => {
    describe('POST', () => {
        it('deve registrar um novo usuário com sucesso', async () => {
            const randomUser = faker.internet.username()

            const resposta = await request(process.env.BASE_URL)
                .post('/users/register')
                .send({ ...registerFixture.request, username: randomUser })

            expect(resposta.status).to.equal(201)
            expect(resposta.body).to.deep.equal({ ...registerFixture.response, username: randomUser })
        })
    })
})