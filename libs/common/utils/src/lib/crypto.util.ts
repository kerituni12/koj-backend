import * as crypto from 'crypto';

/**
 * initialization vector must 16 byte for 128, 192, 256
 * key must 32 byte
 */

export interface encryptedData {
  iv: string;
  data: string;
}

const algorithm = 'aes-256-cbc';
const initVector = crypto.randomBytes(16);
const defaultSecret = process.env.CRYPTO_AUTH_SECRET || 'defaultSecret!';
const defaultKey = crypto.scryptSync(defaultSecret, 'salt', 32);

export function encrypt(data: string, securitykey: Buffer = defaultKey) {
  const cipher = crypto.createCipheriv(algorithm, securitykey, initVector);
  let encryptedData = cipher.update(data, 'utf-8', 'hex');
  encryptedData += cipher.final('hex');
  return { iv: initVector.toString('hex'), data: encryptedData };
  [];
}

export function decrypt(encryptedData: encryptedData, securitykey: Buffer = defaultKey) {
  const { iv, data } = encryptedData;
  const initVector = Buffer.from(iv, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, securitykey, initVector);
  let decryptedData = decipher.update(data, 'hex', 'utf-8');
  decryptedData += decipher.final('utf-8');
  return decryptedData;
}
