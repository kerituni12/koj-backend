import { encryptedData } from '@koj/common/utils';

export interface JwtDto {
  userId: number;
  domainId: number;
  private: encryptedData;
  iat: number;
  exp: number;
}
