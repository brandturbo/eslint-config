//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { noArrayMethods } from './rules/noArrayMethods'

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
const rules = {
    'no-array-methods': noArrayMethods,
}
const configs = {
    recommended: {
        root: true,
        parser: '@typescript-eslint/parser',
        plugins: [
            '@typescript-eslint',
            'simple-import-sort',
            'functional',
            '@fanclub',
        ],
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:functional/external-recommended',
            'plugin:functional/no-object-orientation',
            'prettier',
        ],
        env: {
            node: true,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'arrow-body-style': ['warn', 'as-needed'],
            '@typescript-eslint/ban-ts-comment': 'error',
            'no-console': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            'unicorn/filename-case': ['error', { case: 'camelCase' }],
            '@fanclub/no-array-methods': 'error',
        },
    },
}

module.exports = {
    rules,
    configs,
}
