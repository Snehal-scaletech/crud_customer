import * as bcrypt from 'bcrypt';
export function encodePassword(password: string) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hash(password, salt);
}
