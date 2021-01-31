const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();
const expect = chai.expect;
const app = require('../../server');

describe('GET FizzBuzz data', () => {
    it('should return 404 status', done => {
        chai
            .request(app)
            .get('/api/fizzbuzz')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it('should return 200 status', done => {
        chai
            .request(app)
            .get('/api/fizzbuzz/1')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('should match Data for count 15', async done => {
        const data = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
        await chai
            .request(app)
            .get('/api/fizzbuzz/15').then(function (res) {
                if (err) { return done(err); }
                const response = res.body;
                expect(response).to.have.equal(data);
                done();
            }).catch(done());
    });

    it('should match Data for count 100', async done => {
        const data = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"];
        await chai
            .request(app)
            .get('/api/fizzbuzz/100').then(function (res) {
                if (err) { return done(err); }
                const response = res.body;
                expect(response).to.have.equal(data);
                done();
            }).catch(done());
    });
});