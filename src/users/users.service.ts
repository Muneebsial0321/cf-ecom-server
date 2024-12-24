import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor(private readonly db: DbService) { }

  _DEV_create(user:Prisma.UserCreateInput){
    return this.db.user.create({data:user})
  }

  findAll() {
    return this.db.user.findMany()
  }

  findOne(id: string) {
    return this.db.user.findUnique({
      where:{id}
    })
  }

  update(id: string, updateUserDto: UpdateUserDto) {
   this.db.user.update({
    where:{id},
    data:updateUserDto
   })
  }

  remove(id: string) {
    this.db.user.delete({where:{id}})
  }
}
