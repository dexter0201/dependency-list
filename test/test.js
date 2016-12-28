var assert = require('assert');

describe('Array', () => {
    describe('#indexOf', () => {
        it('It should return -1 when value is not present', () => {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});
