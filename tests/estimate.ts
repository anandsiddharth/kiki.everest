import { billAll } from "../src/modules/order/bill";
import { estimate } from "../src/modules/time/estimate";


const assert = require("assert");




describe('Delivery Estimate', function () {
    let orderA = { id: 'PKG1', distance: 30, weight: 50, couponCode: 'OFR001' };
    let orderB = { id: 'PKG2', distance: 125, weight: 75, couponCode: 'OFR008' };
    let orderC = { id: 'PKG3', distance: 100, weight: 175, couponCode: 'OFR003' };
    let orderD = { id: 'PKG4', distance: 60, weight: 110, couponCode: 'OFR002' };
    let orderE = { id: 'PKG5', distance: 95, weight: 155, couponCode: 'NA' };


    let billed = billAll(100, [orderA, orderB, orderC, orderD, orderE])
    let estimated = estimate(2, 70, 200, billed)

    let orderAe = estimated.find((x) => x.id == "PKG1")
    let orderBe = estimated.find((x) => x.id == "PKG2")
    let orderCe = estimated.find((x) => x.id == "PKG3")
    let orderDe = estimated.find((x) => x.id == "PKG4")
    let orderEe = estimated.find((x) => x.id == "PKG5")

    it('should estimate 3.98 approximately for PKG1', function () {
        assert(orderAe?.eta && orderAe?.eta >= 3.97 && orderAe?.eta <= 4.05)
    });

    it('should estimate 1.78 approximately for PKG2', function () {
        assert(orderBe?.eta && orderBe?.eta >= 1.76 && orderBe?.eta <= 1.80)
    });

    it('should estimate 1.42 approximately for PKG3', function () {
        assert(orderCe?.eta && orderCe?.eta >= 1.40 && orderCe?.eta <= 1.44)
    });

    it('should estimate .85 approximately for PKG4', function () {
        assert(orderDe?.eta && orderDe?.eta >= 0.83 && orderDe?.eta <= 0.87)
    });

    it('should estimate 4.19 approximately for PKG5', function () {
        assert(orderEe?.eta && orderEe?.eta >= 4.18 && orderEe?.eta <= 4.22)
    });

});
