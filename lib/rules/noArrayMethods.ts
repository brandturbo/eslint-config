import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
    (name) => `https://example.com/rule/${name}`
)

export const noArrayMethods = createRule({
    defaultOptions: [],
    name: 'no-array-methods',
    meta: {
        docs: {
            description: 'disallow the a specific method of a prototype.',
            recommended: false,
        },
        schema: [],
        fixable: undefined,
        messages: {
            forbidden:
                'Cannot call array member methods. Use ramda functions instead. e.g. `R.map` instead of [].map',
        },
        type: 'problem',
    },
    create: (context) => {
        return {
            CallExpression(node) {
                if (node.callee) {
                    if (node.callee.type === 'MemberExpression') {
                        if (node.callee.object.type === 'ArrayExpression') {
                            context.report({
                                messageId: 'forbidden',
                                loc: node.loc,
                            })
                        }
                    }
                }
            },
        }
    },
})
