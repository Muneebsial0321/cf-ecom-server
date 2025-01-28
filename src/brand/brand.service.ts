import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class BrandService {
  constructor(
    private readonly db:DbService
  ){}
  async create(createBrandDto: CreateBrandDto) {
    return this.db.brand.create({data:createBrandDto})
  }

  async findAll() {
    return await this.db.brand.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
