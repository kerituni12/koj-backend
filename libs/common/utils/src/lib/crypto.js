const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const defaultSecret = process.env.CRYPTO_AUTH_SECRET || 'defaultSecret!';
const defaultKey = crypto.scryptSync(defaultSecret, 'salt', 32);
const iv = crypto.randomBytes(16);

function encrypt(text, key = defaultKey) {
  let cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text, key = defaultKey) {
  let iv = Buffer.from(text.iv, 'hex');
  let encryptedText = Buffer.from(text.encryptedData, 'hex');

  let decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}

const res = encrypt('dfdfdfd');
console.log('🚀 ~ file: crypto.js ~ line 32 ~ res', res);

console.log(
  decrypt({
    iv: 'edddb20e2ba97d39dbf1e621041c5762',
    encryptedData: 'e848a8a8a49e9982b0204aff5c3bd7bf',
  }),
);
