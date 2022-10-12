import { RuleTester } from 'eslint'
import rule from './noStreamUsage'
import * as path from 'path'

new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        sourceType: 'module',
        project: path.resolve(__dirname, '../../tsconfig.json'),
    },
}).run(
    'no-stream-usage',
    //@ts-expect-error types somehow wrong
    rule,
    {
        valid: [
            {
                code: 'R.map(value => value + 1, [1,2])',
                filename: 'example.ts',
            },
        ],

        invalid: [
            {
                code:
                    "import { Readable } from 'stream'\n" +
                    "const myStream = Readable.from('text')\n" +
                    "myStream.on('data', console.log)",
                filename: 'example.ts',
                errors: [
                    {
                        message:
                            'Do not consume stream with `Stream.on`. Consume it as an async iterator instead',
                    },
                ],
            },
            /*
            {
                code: '[1,2].filter(value => !!value)',
                errors: [
                    {
                        message:
                            'Cannot call array member methods. Use ramda functions instead. e.g. `R.map` instead of [].map',
                    },
                ],
            },*/
        ],
    }
)
