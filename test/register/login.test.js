const request = require('supertest');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');
const loginFixture = require('../fixtures/login.json');
require('dotenv').config();

describe('/users/login', () => {
    describe('POST', () => {
        it('deve realizar a autenticação com sucesso', async () => {
            const resposta = await request(process.env.BASE_URL)
                .post('/users/login')
                .send(loginFixture.request)

            expect(resposta.status).to.equal(200)
            expect(resposta.body.token).to.be.a('string')
        })
    })
})