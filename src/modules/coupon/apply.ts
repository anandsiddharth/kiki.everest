import { calculatePercentageValue } from "../../utils";
import { Order } from "../order/order";
import { Coupon } from "./coupon";
import { validators } from "./validtors";


export const apply = (order: Order, coupon: Coupon | null): number => {
    if (!coupon) return 0;
    if (coupon.code != order.couponCode) return 0;
    if (!coupon.discount) return 0;
    if (coupon.discount.value == 0) return 0;

    if (coupon.validations.length > 0) {

        for (var i in coupon.validations) {

            if ((<any>order)[coupon.validations[i].attribute]) {

                for (var j in coupon.validations[i].rules) {
                    if (validators.hasOwnProperty(coupon.validations[i].rules[j].type)) {

                        if (
                            validators[coupon.validations[i].rules[j].type](
                                (<any>coupon.validations[i].rules[j].value),
                                (<any>order)[coupon.validations[i].attribute])
                        ) {
                            continue;
                        }
                        return 0;
                    }
                    throw new Error("[ValidationRule]: valiation rule not defined")
                }

                continue;
            }
            return 0;

        }

    }


    return getCouponDiscount(order, coupon);
}

function getCouponDiscount(order: Order, coupon: Coupon): number {

    if (coupon.discount.type == 'percentage' && order.cost) {

        return order.cost * coupon.discount.value / 100

    }

    if (coupon.discount.type == 'flat' && order.cost) {

        return order.cost - coupon.discount.value;

    }


    return 0;
}