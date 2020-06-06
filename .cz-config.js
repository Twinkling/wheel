module.exports = {
    types: [
        { value: 'feat', name: 'feat:     A new feature' },
        { value: 'fix', name: 'fix:      A bug fix' },
        { value: 'docs', name: 'docs:     Documentation only changes' },
        {
          value: 'style',
          name:
            'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
        },
        {
          value: 'refactor',
          name: 'refactor: A code change that neither fixes a bug nor adds a feature',
        },
        {
          value: 'perf',
          name: 'perf:     A code change that improves performance',
        },
        { value: 'test', name: 'test:     Adding missing tests' },
        {
          value: 'chore',
          name:
            'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
        },
        { value: 'revert', name: 'revert:   Revert to a commit' },
        { value: 'WIP', name: 'WIP:      Work in progress' },
      ],

    scopes: [
        // "global",
        // { name: "global" },
    ],

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    // override the messages, defaults are as follows
    messages: {
        type: '选择要提交的更改类型:',
        scope: '\n更改范围 (optional):',
        // used if allowCustomScopes is true
        customScope: '更改范围:',
        subject: '用简短准确的描述更改内容:\n',
        body: '提供详细的更改内容 (optional). 使用 "|" 换行:\n',
        breaking: '破坏性的修改 (optional):\n',
        footer: '列出被关闭的 issue (optional). E.g.: #31, #34:\n',
        confirmCommit: '你确认要提交以上内容吗?',
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // skip any questions you want
    skipQuestions: ['body'],

    // limit subject length
    subjectLimit: 100,
};