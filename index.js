var child_process = require('child_process');

module.exports = function (dir, opts) {
  opts = opts || {};
  opts.encoding = opts.encoding || 'utf8';
  return new Promise(function (fulfill, reject) {
    child_process.exec('git rev-parse HEAD', {
      cwd: dir,
    }, function (err, stdout, stderr) {
      if (err) {
        reject(err);
      } else {
        var rev = stdout.toString().trim();
        fulfill({
          rev: rev,
        });
      }
    });
  });
};
