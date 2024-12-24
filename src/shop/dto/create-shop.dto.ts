import { IsString } from "class-validator"

export class CreateShopDto {
    @IsString()
    name: string

    @IsString()
    desc: string
    
    @IsString()
    userId: string
}