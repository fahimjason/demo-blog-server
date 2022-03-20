const expect = require('chai').expect;

const authMiddleware = require('../middleware/auth')

it('Should throw an error if no authentication header is not present', function () {
    const req = {
        get: function (headerName) {
            return null;
        }
    }

    expect(authMiddleware.bind(this, req, {}, () => { })).to.throw('Not authenticated.');
});