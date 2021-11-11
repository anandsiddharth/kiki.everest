import { ValidationRuleNumericValue, ValidationRuleRangeValue } from "./validation"

export const validators = {
    'ge': (ruleValue: ValidationRuleNumericValue, value: number) => {
        return value > ruleValue
    },
    'le': (ruleValue: ValidationRuleNumericValue, value: number) => {
        return value < ruleValue
    },
    'range': (ruleValue: ValidationRuleRangeValue, value: number) => {
        return value >= ruleValue.from && value <= ruleValue.to
    }
}

