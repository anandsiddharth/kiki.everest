const assert = require("assert");
import { Coupon } from "../src/modules/coupon/coupon";



describe('Coupon', function () {
    describe('try to create coupon instance with coupon code', function () {
        it('should throw exception when code is not present', function () {
            assert.throws(() => Coupon.fromJSON({ code: "", validations: [] }), Error, "Error thrown");
        });
    });
});
