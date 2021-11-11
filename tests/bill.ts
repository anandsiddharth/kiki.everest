import { bill } from "../src/modules/order/bill";


const assert = require("assert");




describe('Test bills (test cases)', function () {
    it('should have 0 discount', function () {
        assert.equal(bill(100, { id: 'PKG1', distance: 5, weight: 5, couponCode: 'OFR001' }).discount, 0)
    });
    it('should have 0 discount', function () {
        assert.equal(bill(100, { id: 'PKG2', distance: 5, weight: 15, couponCode: 'OFR001' }).discount, 0)
    });
    it('should have 35 as discount', function () {
        assert.equal(bill(100, { id: 'PKG3', distance: 100, weight: 10, couponCode: 'OFR003' }).discount, 35)
    });
});
