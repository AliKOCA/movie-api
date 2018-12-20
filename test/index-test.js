const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();


chai.use(chaiHttp);
/*
describe('Node Server', () => {
    it('(GET /) Anasayfayı döndürdür.', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });

    });
  
});




*/