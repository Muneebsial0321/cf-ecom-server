import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-facebook';
import { OAuth } from './validate';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(private readonly OAuth_:OAuth) {
        super({
            clientID: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
            callbackURL: `${process.env.BACKEND_URL}/auth/facebook/callback`,
            scope: ['profile', 'email'],
        });
    }

    async validate(
        _accessToken: string,
        _refreshToken: string,
        profile: any,
        done: VerifyCallback,
      ): Promise<any> {
        try {
          const user={}
          // const user = await this.OAuth_.validate( profile);
          done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
}