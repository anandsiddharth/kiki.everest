import { apply } from '../coupon/apply'
import { Coupon } from '../coupon/coupon'
import { Order } from './order'
export const bill = (baseDeliveryCost: number, order: Order): Order => {
    order.cost = baseDeliveryCost + (order.weight * 10) + (order.distance * 5)
    order.discount = 0

    if (order.couponCode && order.couponCode.length) {
        order.discount = apply(order, Coupon.find(order.couponCode))
    }


    order.total = order.cost - order.discount

    return order
}

export const billAll = (baseDeliveryCost: number, order: Order[]): Order[] => {

    for (var i in order) {
        bill(baseDeliveryCost, order[i])
    }

    return order;
}