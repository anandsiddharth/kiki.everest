import { apply } from "../src/modules/coupon/apply";
import { Coupon } from "../src/modules/coupon/coupon";

const assert = require("assert");




describe('Order', function () {
    describe('check for coupon in order', function () {
        it('should apply coupon discount', function () {
            assert.equal(apply({
                id: 'opop',
                distance: 75,
                weight: 88,
                couponCode: 'OFR001',
                cost: 1355
            }, Coupon.find('OFR001')), 135.5)
        })

        it('should not apply coupon discount', function () {
            assert.equal(apply({
                id: 'opop',
                distance: 75,
                weight: 69,
                couponCode: 'OFR001'
            }, Coupon.find('OFR001')), 0)
        })
    });
});
