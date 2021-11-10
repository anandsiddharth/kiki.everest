const assert = require("assert");

import { Coupon } from "../src/modules/coupon/coupon";



describe('Coupon', function () {
    describe('try to create coupon instance', function () {

        it('should throw exception when code is not present', function () {
            assert.throws(() => Coupon.fromJSON({ code: "", validations: [] }), Error, "Error thrown");
        });
        it('should create coupon instance', function () {
            assert.ok(Coupon.fromJSON({ code: "OFFR1", validations: [] }));
        });
        it('should find coupon OFR001', function () {
            assert.ok(Coupon.find("OFR001"));
        });
        it('should return null', function () {
            assert.equal(Coupon.find("OFR0012"), null);
        });

    });
});
