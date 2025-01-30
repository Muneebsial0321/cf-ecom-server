import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class BrandService {
  constructor(
    private readonly db: DbService
  ) { }
  async create(createBrandDto: CreateBrandDto) {
    return this.db.brand.create({ data: createBrandDto })
  }

  async findAll() {
    return await this.db.brand.findMany()
  }

  findOne(id: string) {
    return `This action returns a #${id} brand`;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  async remove(id: string) {
    return await this.db.brand.delete({ where: { id } });
  }
}
