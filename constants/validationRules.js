export const validationRules = {
    'text': {
        minLength: {
            value: 3,
            message: 'Too Short!'
        },
        maxLength: {
            value: 50,
            message: 'It should have 50 character!'
        }
    },
    'email': {
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
        }
    },
    'password': {
        minLength: {
            value: 5,
            message: "min length is 5"
        }
    }
}