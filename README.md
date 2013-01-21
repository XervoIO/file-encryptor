# file-encryptor

Encrypts files using Node's built-in Cipher class. Encryption is stream-based for low memory footprint.

## Getting Started

Install the module:

    npm install file-encryptor

Use it in your script:

    var encryptor = require('file-encryptor');

    var key = 'My Super Secret Key';

    // Encrypt file.
    encryptor.encryptFile('input_file.txt', 'encrypted.dat', key, function(err) {
      // Encryption complete.
    });

    ...

    // Decrypt file.
    encryptor.decryptFile('encrypted.dat', 'output_file.txt', key, function(err) {
      // Decryption complete.
    });

The input file will be streamed through the Cipher and to the output file. If the output files does not
exists, it will be created. If the output file already exists, it will be truncated.

## Change Cipher Algorithm

By default the "aes192" cipher algorithm is used. This can be changed by passing a new algorithm string
as an option.

Available algorithms can be found by executing:

    openssl list-cipher-algorithms

Setting algorithm option:

    var key = 'My Super Secret Key';
    var options = { algorithm: 'aes256' };

    encryptor.encryptFile('input_file.txt', 'encrypted.dat', key, options, function(err) {
      // Decryption complete;
    });

    ...

    encryptor.decryptFile('encrypted.dat', 'outputfile.txt', key, options, function(err) {
      // Encryption complete;
    });

## License
Copyright (c) 2013 Modulus
Licensed under the MIT license.
