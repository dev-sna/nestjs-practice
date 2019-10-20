import { createHash } from 'crypto';

export const getHash = input => {
  const hash = createHash('sha256', input).digest('hex');
  return hash;
};
