var encryptor = require('../lib/file-encryptor'),
    fs = require('fs'),
    path = require('path');

var key = 'My Super Secret Key';

var encrypt = function(input) {
  encryptor.encryptFile(
    path.join(__dirname, input),
    path.join(__dirname, input + '.data'),
    key,
    function(err, result) {
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
    function(err, result) {
      console.log(original + ' decryption complete.');
    }
  );
};

encrypt('example.txt');
encrypt('ModulusDemo.zip');
encrypt('Tweetbot.0.8.1_1.zip');
