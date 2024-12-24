import { IsString } from "class-validator"
export class CreateWishListDto {
    @IsString()
    role: String

    @IsString()
    picUrl: String

    @IsString()
    picName: String

    @IsString()
    desc: String

    @IsString()
    gender: String
}
