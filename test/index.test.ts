import chai = require('chai');

import {Index} from '../src/index';

describe("Index Class", () => {
    describe("Index method", () => {
        it("returns 0", () => {
            var index = new Index();
            var result = index.index();
            chai.expect(result).equals(0);
        })
    });
});