const Parser = require('tap-parser');

const tapParser = new Parser();

const tests: object[] = [];

tapParser.on('assert', (testcase: any) => {
  tests.push(testcase);
});
tapParser.on('complete', async (results: any) => {
  console.log('Sending results...');
  console.log(tests);
  console.log('Results sent!');
});

process.stdin.pipe(tapParser).pipe(process.stdout);
