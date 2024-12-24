import { IsString } from "class-validator"


export class UpdateShopDto {

    @IsString()
    name: string

    @IsString()
    desc: string
}
