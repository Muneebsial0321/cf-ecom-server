import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-github';
import { OAuth } from './validate';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
    constructor(private readonly OAuth_:OAuth) {
        super({
            clientID: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            callbackURL: `${process.env.BACKEND_URL}/auth/github/callback`,
            scope: ['user:email'],
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
    