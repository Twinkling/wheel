module.exports = {
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': [2, {
            singleline: 4,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }],
        'vue/order-in-components': 2,
        'vue/html-self-closing': 2,
        'vue/require-default-prop': 2,
        'vue/require-v-for-key': 2,
        'vue/require-prop-types': 2,
        'vue/no-unused-vars': 2,
        'vue/no-parsing-error': 2,
        'vue/no-side-effects-in-computed-properties': 2,
        'vue/valid-v-for': 2,
        'vue/no-confusing-v-for-v-if': 2,
        'vue/no-duplicate-attributes': 2
    },
};
