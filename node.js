const lintStaged = require('lint-staged');

const main = async function () {
  try {
    const success = await lintStaged({
      config: {
        '*.js': "eslint"
      },
      shell: true,
      quiet: false,
      debug: true
    });
    console.log(success ? 'Linting was successful!' : 'Linting failed!');
  } catch (e) {
    console.error(e);
  }
};

main();