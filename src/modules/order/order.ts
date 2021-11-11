export interface Order {
    id: string
    distance: number
    weight: number
    couponCode?: string

    cost?: number
    discount?: number
    total?: number

    eta?: number
}