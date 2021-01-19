var crypto = require('crypto'),
    encryptor = require('../lib/file-encryptor'),
    fs = require('fs'),
    path = require('path');

var key = crypto.randomBytes(32);
var iv = crypto.randomBytes(16);

var encrypt = function(input) {
  encryptor.encryptFile(
    path.join(__dirname, input),
    path.join(__dirname, input + '.data'),
    key,
    iv,
    { algorithm: 'aes256' },
    function(err) {
      console.log(input + ' encryption complete.');
      decrypt(input, input + '.data');
    }
  );
};

var decrypt = function(original, encrypted) {
  encryptor.decryptFile(
    path.join(__dirname, encrypted),
    path.join(__dirname, 'decrypted.' + original),
    key,
    iv,
    { algorithm: 'aes256' },
    function(err) {
      console.log(original + ' decryption complete.');
    }
  );
};

encrypt('example.txt');
