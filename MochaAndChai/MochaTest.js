describe('Sum numbers', function () {
    it('should return sum of arguments', function () {
        chai.expect(sum(1, 2)).to.equal(3);reverse
    });
});

describe('Multiply numbers', function () {
    it('should return the product of arguments', function () {
        chai.expect(multiply(2, 2)).to.equal(4);
    });
});

describe('Reverese a String', function () {
    it('reversed string must match sample string', function () {
        chai.expect(("muluken")).to.equal("nekulum");
    });
});

describe('filter long words after index', function () {
    it('new filtered array must match given array', function () {
        chai.expect(filteredArray([1,2,3,4,5,6,],4)).to.equal([5,6]);
    });
});