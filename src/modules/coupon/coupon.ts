
import { Discount } from "./discount";
import { load } from "./load";
import { Validation } from "./validation";
export class Coupon {
    public code: string
    public discount: Discount
    public validations: Validation[]

    constructor(code: any, discount: any, validations: Array<any>) {
        if (!code || !code.length) throw new Error('[InvalidInput] coupon code is not valid')
        this.code = code;
        this.validations = validations;
        this.discount = discount
    }

    public static fromJSON(json: any): Coupon {
        return new Coupon(json.code, json.discount, json.validations);
    }

    public static find(code: string): Coupon | null {
        let coupon = load().filter((x: any) => x.code == code)[0];
        if (coupon) {
            return Coupon.fromJSON(coupon);
        }
        return null
    }

}