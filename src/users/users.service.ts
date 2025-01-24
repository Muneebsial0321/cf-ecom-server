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
    return this.db.user.findMany({select:{id:true,name:true,email:true,password:true}})
  }

  async findOne(id: string) {
    return await this.db.user.findUnique({
      where:{id}
    })
  }

  update(id: string, updateUserDto: UpdateUserDto) {
   this.db.user.update({
    where:{id},
    data:updateUserDto
   })
  }

  async remove(id: string) {
   await  this.db.user.delete({where:{id}})
   return {message:"user has been deleted"}
  }
}
