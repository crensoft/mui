// @ts-ignore
const path = require('path');

module.exports = {
  pagePerSection: true,
  // exampleMode: 'expand',
  // usageMode: 'expand',
  propsParser: require('react-docgen-typescript').parse,
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Core',
      components: ['./packages/mui-core/src/components/**/*.tsx'],
      sectionDepth: 2,
    },
    {
      name: 'Marketing',
      components: ['./packages/mui-marketing/src/components/**/*.tsx'],
      sectionDepth: 2,
    },
  ],
  assetsDir: ['./packages/mui-core/assets', './packages/mui-marketing/assets'],
  ignore: ['**/lib/**', '**/*.test.tsx', '**/node_modules/**'],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'packages/mui-core/src/components/Styleguide/FrameWrapper'),
  },
  template: {
    head: {
      raw: `<style>.styleguide-frame {
        position: relative;
        transform: translate3d(0, 0, 0); /* <-- THIS LINE MAKES THE TRICK! */
        outline: 1px solid #eaeaea;
      }</style>`,
    },
  },
  webpackConfig: {
    devtool: 'cheap-eval-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    stats: 'minimal',
    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      ],
    },
  },
};
