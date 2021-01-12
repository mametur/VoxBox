const bcrypt = require("bcrypt");

const cryptPassword = async (password) => {
  return new Promise(function (resolve, reject) {
    bcrypt.hash(password, 15, function (err, hash) {
      if (err) return reject(err);
      return resolve(hash);
    });
  });
};

module.exports = { cryptPassword };
