const path = require('path')
const CLIEngine = require("eslint").CLIEngine
const cli = new CLIEngine({
  useEslintrc: false,
  rules: {
    semi: [2, 'never']
  },
   plugins: [
    'html'
  ],
  fix: true
})
const report = cli.executeOnFiles([path.resolve(__dirname, './index.js')])
console.log(report)
CLIEngine.outputFixes(report)