module.exports = {
    extends: ['cz'],
    // 需增加以下配置, 否则将会跳过校验
    // https://github.com/whizark/commitlint-config-cz/issues/38
    rules: {
        'type-empty': [2, 'never'],
        'subject-empty': [2, 'never']
    }
};
