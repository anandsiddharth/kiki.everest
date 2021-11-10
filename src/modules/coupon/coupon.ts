import { ValidationRule } from "./validation";
export class Coupon {
    public code: string
    public validations: ValidationRule[]

    constructor(code: any, validations: Array<any>) {
        this.code = code;
        this.validations = validations;
    }

    public static fromJSON(json: any) {
        return new Coupon(json.code, json.validations);
    }
}