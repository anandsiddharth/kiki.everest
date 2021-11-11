export type DiscountType = 'percentage' | 'flat'
export interface Discount {
    type: DiscountType
    value: number
}