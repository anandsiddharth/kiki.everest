import { ValidationRule } from "./validation";
export class Coupon {
    public code: string
    public validations: ValidationRule[]

    constructor(code: any, validations: Array<any>) {
        if (!code || !code.length) throw new Error('coupon code is not valid')
        this.code = code;
        this.validations = validations;
    }

    public static fromJSON(json: any): Coupon {
        return new Coupon(json.code, json.validations);
    }
}