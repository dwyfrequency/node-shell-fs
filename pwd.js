module.exports = {
  pwd: function () {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  }
}
