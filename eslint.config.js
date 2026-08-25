const love = require('eslint-config-love').default

module.exports = [
  {
    ignores: ['dist/', 'coverage/', 'node_modules/']
  },
  {
    ...love,
    files: ['src/**/*.ts']
  },
  {
    files: ['src/**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off'
    }
  }
]
