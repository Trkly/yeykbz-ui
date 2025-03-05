export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 自定义规则示例
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style']]
    }
};