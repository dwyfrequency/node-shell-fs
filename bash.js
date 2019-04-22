// Output a prompt
const { pwd } = require('./pwd')
const { ls } = require('./ls')
const { cat } = require('./cat')
const { curl } = require('./curl')
process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const [cmd, ...args] = data.toString().trim().split(' ');

  let output = '';
  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(args);
      break;
    case 'curl':
      curl(args);
      break;
    default:
      output = 'bad command';
      break;
  }
});
