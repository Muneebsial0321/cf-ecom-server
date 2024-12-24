import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
    @IsString()
    name: string

    @IsString()
    desc: string

    @IsString()
    shopId: string

    @IsNumber()
    price: number

    @IsArray()
    colour?: string[]

    @IsArray()
    size?: string[]

    @IsArray()
    picUrl?: string[]

    @IsBoolean()
    isAvalible: boolean
}
