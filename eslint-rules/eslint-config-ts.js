module.exports = {
    rules: {
        '@typescript-eslint/interface-name-prefix': [2, 'always'],
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-explicit-any': 0,

        // 禁止对对象文本进行类型断言
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        // 禁止空成员的接口定义
        '@typescript-eslint/no-empty-interface': 0,

        // await 可以直接 return
        'no-return-await': 0,
        // 和 typescript-eslint 冲突
        'no-unused-vars': 0,
        // 代码块花括号可以不换行
        'brace-style': 0,

        camelcase: 0,
        // 和 typescript-eslint 冲突
        indent: 0,
        'keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }],
    },
};
