import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class OAuth {
  constructor(
    private readonly db: DbService,
  ) { }
  async validate(pId: string, name: string, provider: string, email?: string): Promise<any> {
    const data = { pId, name, provider, email }

    let user = await this.db.user.findFirst({ where: { email },select:{id:true,name:true,email:true} })


    if (user) {
      console.log('Google--------> login')
      return user
    }

    console.log("Google--------> signup")
    user = await this.db.user.create({ data,select:{id:true,name:true,email:true} })
    return user

  }
}
