import { Injectable } from '@nestjs/common';

@Injectable()
export class OAuth {
  async validate(providerId: string, name: string, provider: string, email?: string): Promise<any> {
    // db ops
    const data = { providerId, name, provider, email }
    return data
  }
}
