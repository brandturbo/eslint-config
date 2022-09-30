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
        parser: '@typescript-eslint/parser',
        plugins: [
            '@typescript-eslint',
            'simple-import-sort',
            'functional',
            'unicorn',
            '@brandturbo',
        ],
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
            'plugin:functional/external-recommended',
            'plugin:functional/no-object-orientation',
            'plugin:unicorn/recommended',
            'prettier',
            'prettier/unicorn',
            'prettier/@typescript-eslint',
            'prettier/babel',
            'prettier/unicorn',
        ],
        env: {
            node: true,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'arrow-body-style': ['error', 'as-needed'],
            '@typescript-eslint/ban-ts-comment': 'error',
            'no-console': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@brandturbo/no-array-methods': 'error',

            //overwrites:
            '@typescript-eslint/prefer-readonly': 'off',
            '@typescript-eslint/prefer-readonly-parameter-types': 'off',

            // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/896

            'unicorn/filename-case': 'off',
            'unicorn/prefer-query-selector': 'off',
        },
    },
}

module.exports = {
    rules,
    configs,
}
