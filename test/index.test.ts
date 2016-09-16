import {expect} from 'chai';

import {Index} from '../src/index';

describe("Index Class", () => {
    describe("Index method", () => {
        it("returns 0", () => {
            var index = new Index();
            var result = index.index();
            expect(result).equals(0);
        })
    });
});