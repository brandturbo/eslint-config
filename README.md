# brandTURBOs eslint-plugin

Brings some rules for you.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
yarn add -D eslint
```

Next, install `@brandturbo/eslint-plugin`:

```sh
yarn add -D @brandturbo/eslint-plugin
```

## Usage

Add `@brandturbo/eslint-plugin` to the plugins section of your `.eslintrc` configuration file and enable the recommend rules. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["@brandturbo"],
    "extends": ["plugin:@brandturbo/recommended"]
}
```

You can also configure only specific rules

```json
{
    "rules": {
        "@brandturbo/no-array-methods": 2
    }
}
```

## Supported Rules

-   Fill in provided rules here [TODO]
