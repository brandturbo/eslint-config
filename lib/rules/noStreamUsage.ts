import { ESLintUtils } from '@typescript-eslint/utils'
import * as tsutils from 'tsutils'
const createRule = ESLintUtils.RuleCreator(
    (name) => `https://example.com/rule/${name}`
)

export default createRule({
    defaultOptions: [],
    name: 'no-stream-usage',
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
                    if (
                        node.callee.type === 'MemberExpression' &&
                        node.callee.property.type === 'Identifier' &&
                        node.callee.property.name == 'on'
                    ) {
                        const parserServices =
                            ESLintUtils.getParserServices(context)
                        const checker = parserServices.program.getTypeChecker()
                        const originalNode =
                            parserServices.esTreeNodeToTSNodeMap.get(node)
                        const nodeType = checker.getTypeAtLocation(originalNode)
                        console.log(node.callee.object.type)
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
