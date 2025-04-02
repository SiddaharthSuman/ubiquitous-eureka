// stylelint.config.mjs
import standardScss from 'stylelint-config-standard-scss';
import recessOrder from 'stylelint-config-recess-order';
import prettier from 'stylelint-prettier';

const stylelintConfig = {
  extends: [standardScss, recessOrder, prettier],
  files: ['**/*.scss'],
  plugins: [prettier],
  rules: {
    // overrides: [
    //   {
    //     files: ['**/*.module.scss'],
    //     rules: {
    //       'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    //     },
    //   },
    // ],
    'prettier/prettier': true,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer'],
      },
    ],
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$', // camelCase
  },
};

export default stylelintConfig;
