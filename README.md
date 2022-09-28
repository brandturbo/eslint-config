# eslint-plugin-no-restricted-methods

Allows to restrict usage of member methods for classes.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-restricted-methods`:

```sh
npm install eslint-plugin-no-restricted-methods --save-dev
```

## Usage

Add `no-restricted-methods` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-restricted-methods"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-restricted-methods/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


