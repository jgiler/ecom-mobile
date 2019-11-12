// imports chai expect module
const expect = require('chai').expect;
const chaiHttp = require('chai-http') // npm i --save chai-http
// imports request. Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
const request = require('request')
const chai = require('chai')

const app = require('../server')

chai.use(chaiHttp)


// did describe just to wrap everything nicely and to give it a name that states which challenge this test is for.
describe('testing api endpoints for 200 status code', function() {
    it('HOME PAGE 200 STATUS CODE', done => {
        request('http://localhost:3500/', (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    it('PRODUCTS PAGE 200 STATUS CODE', done => {
        request('http://localhost:3500/api/products', (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    it('PRODUCTS FILTER PAGE STATUS CODE', done => {
        request('http://localhost:3500/api/productfilter/:category', (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    it('CONTACTS PAGE 200 STATUS CODE', done => {
        request('http://localhost:3500/api/contacts', 
        (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
})

describe('testing other things', function () {
    it('PRODUCT INFO', done => {
           chai.request(app)
           .get('/api/products')
           .end((error,response) => {
               console.log('response -', response.body)
            done()
        })
    })
})

