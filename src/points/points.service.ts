import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class PointsService {
  constructor(private readonly db: DbService) { }
  async create(points: Prisma.PointsCreateInput) {
    return await this.db.points.create({ data: points })
  }

  async findAll() {
    return await this.db.points.findMany()
  }

  async findOne(id: number) {
    return await this.db.points.findUnique({ where: { id } })
  }

  async update(id: number, updatePointDto: Prisma.PointsUpdateInput) {
    return await this.db.points.update({ where: { id }, data: updatePointDto })
  }

  async remove(id: number) {
    return await this.db.points.delete({ where: { id } })
  }
}
