
export type ValidationRuleType = "le" | "ge" | "range"

export type ValidationRuleRangeValue = {
    from: number
    to: number
}
export type ValidationRuleNumericValue = number

export type ValidationRuleValue = ValidationRuleRangeValue | ValidationRuleNumericValue

export interface ValidationRule {
    type: ValidationRuleType
    value: ValidationRuleValue
}

export interface Validation {
    attribute: string
    rules: ValidationRule[]
}