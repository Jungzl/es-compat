#!/usr/bin/env node
const eslint = require('eslint');

const { hasErrors } = execute();

if (hasErrors) {
  process.exitCode = 1;
} else {
  console.log('No issues found. Files analysed are compatible with the target runtimes.');
}

function execute() {
  const eslintCLI = new eslint.CLIEngine({
    useEslintrc: false, // ignore any config files
    plugins: ['es-compat'],
    parserOptions: {
      // Latest version, so all features work
      ecmaVersion: 2020,
    },
    rules: {
      'es-compat/compat': 'error',
    },
  });

  const report = eslintCLI.executeOnFiles(['.']);

  const formatter = eslintCLI.getFormatter();
  console.log(formatter(report.results));

  return { hasErrors: report.errorCount > 0 };
}
