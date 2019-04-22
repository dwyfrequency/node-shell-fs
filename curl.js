const request = require('request')

module.exports = {
  curl: function (args) {
    const url = args[0]
    request(url, function (err, response, body) {
      if (err) {
        throw err;
      }
      process.stdout.write(body);
      process.stdout.write('\nprompt > ');
    });
  }
}
