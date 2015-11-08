var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server/app');

var should = chai.should();
chai.use(chaiHttp);

describe('server router', function() {
  it('should return...', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res) {
      res.should.have.status(200);
      // res.should.have.text('<p>Welcome to Express</p>');
      done();
    });
  });
});
