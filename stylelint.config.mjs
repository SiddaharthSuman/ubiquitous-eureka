// stylelint.config.mjs
import standardScss from 'stylelint-config-standard-scss';
import recessOrder from 'stylelint-config-recess-order';
import prettier from 'stylelint-prettier';
import stylelintUseLogical from 'stylelint-use-logical';
import highPerformanceAnim from 'stylelint-high-performance-animation';

const stylelintConfig = {
  extends: [standardScss, recessOrder, prettier],
  files: ['**/*.scss'],
  plugins: [prettier, stylelintUseLogical, highPerformanceAnim],
  rules: {
    // overrides: [
    //   {
    //     files: ['**/*.module.scss'],
    //     rules: {
    //       'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    //     },
    //   },
    // ],
    'csstools/use-logical': 'always',
    'plugin/no-low-performance-animation-properties': true,
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
