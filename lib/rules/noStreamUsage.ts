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
            description: 'disallow consumption of streams via `on`.',
            recommended: false,
        },
        schema: [],
        fixable: undefined,
        messages: {
            forbidden:
                'Do not consume stream with `Stream.on`. Consume it as an async iterator instead',
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
