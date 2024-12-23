import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './auth.interface';

@Injectable()
export class AuthService implements Auth {
  signup(name: string, email: string, password: string): Promise<{ authtoken: string; }> {
    
  }
  async login(email: string, password: string): Promise<{ authtoken: string; }> {

  }

  logout(_id: string): Promise<any> {

  }

}
