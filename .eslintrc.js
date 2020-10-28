module.exports = {
    extends: ['airbnb-typescript', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: [
      "prefer-arrow"
    ],
    rules: {
      'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
      'react/jsx-curly-newline': [
        'error',
        {
          multiline: 'consistent',
          singleline: 'consistent',
        },
      ],
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: false },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/prop-types': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/naming-convention': 'off',
      'no-underscore-dangle': 'off',
      quotes: 'off',
      '@typescript-eslint/quotes': ['error'],
      'import/no-cycle': 'off',
      'react/no-array-index-key': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      "prefer-arrow/prefer-arrow-functions": [
        "warn",
        {
          "disallowPrototype": true,
          "singleReturnOnly": true,
          "classPropertiesAllowed": false
        }
     ],
    },
};