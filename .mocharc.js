module.exports = {

    bail: false,
    ignore: ['/path/to/some/ignored/file'],
    jobs: 10,
    package: './package.json',
    parallel: true,
    recursive: false,
    logLevel: 'debug',
    // reporter: 'mochawesome',
    reporter: 'mochawesome',
    //   require: '@babel/register',
    // retries: 1,
    //   slow: '75',
    sort: false,
    spec: ['test/specs/test05.spec.js'], // the positional arguments!
    timeout: '2000', // same as "timeout: '2s'"
    // timeout: false, // same as "timeout: 0"
    ui: 'bdd',
    'v8-stack-trace-limit': 100, // V8 flags are prepended with "v8-",
    // loglevel: 'info'
    require: ['./test/utils/hooks.js']
}
