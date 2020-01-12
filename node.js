const lintStaged = require('lint-staged')

const main = async function () {
  try {
    const success = await lintStaged({
      config: {
        'index.js': 'eslint --fix'
      },
      shell: false,
      quiet: false,
      debug: false
    })
    console.log(success ? 'Linting was successful!' : 'Linting failed!')
  } catch (e) {
    console.error(e)
  }
}

main()