const fs = require('fs')

module.exports = {
  cat: function (args) {
    const filename = args[0];
    fs.readFile(`./${filename}`, 'utf8', (err, contents) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(contents);
        process.stdout.write('\nprompt > ');
      }
    })
  }
}
