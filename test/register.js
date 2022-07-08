const server = require('./../server');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('Render Registration Form', () => {
    describe('When User Submits Without Opting For Subscription', () => {
        it('it should render the form', (done) => {  chai.request(server)
                .get('/')
                .end((err, res) => {
                        res.should.have.status(200);
                done();
                });
        });
    });
});

describe('Sign Up', () => {
        describe('When User Submits Without Opting For Subscription', () => {
            let response;
            it('it should return message with boolean flag false for subscription', (done) => {
                let userInfo = {
                    first_name: 'test',
                    last_name: 'test',
                    email: 'test@test.com',
                    password: 'password',
                    phone: '998342923'
                }

                chai.request(server)
                    .post('/user')
                    .send(userInfo)
                    .end((err, res) => {
                    response = JSON.parse(res.text)
                            res.should.have.status(200);
                            response.should.not.have.property('isChecked');
                    done();
                    });
            });
        });

        describe('When User Submits And Opted For Subscription', () => {
    it('it should return with boolean flag TRUE for subscription', (done) => {
      let userInfo = {
          first_name: 'test',
          last_name: 'test',
          email: 'test@test.com',
          password: 'password',
          phone: '998342923',
          isChecked: 'on'
      }

      chai.request(server)
          .post('/user')
          .send(userInfo)
          .end((err, res) => {
                response = JSON.parse(res.text)
                  res.should.have.status(200);
                  response.should.have.property('isChecked');
            done();
          });
    });
    });
});
