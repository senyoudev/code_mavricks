import crypto from 'crypto'

const generateRandomPassword = () => {
  return crypto.randomBytes(8).toString('hex');
};


export default generateRandomPassword