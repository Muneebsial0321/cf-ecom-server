import { Injectable } from '@nestjs/common';
import { CreateWishListDto } from './dto/create-wishlist.dto';

@Injectable()
export class WishlistService {
  create(createWishlistDto: CreateWishListDto) {
    return 'This action adds a new wishlist';
  }

  findAll() {
    return `This action returns all wishlist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wishlist`;
  }


  remove(id: number) {
    return `This action removes a #${id} wishlist`;
  }
}
