import { IsArray, IsBoolean, IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @IsString()
    name: string

    @IsString()
    desc: string

    @IsNumber()
    price: number

    @IsArray()
    colour?: string[]

    @IsArray()
    size?: string[]

    @IsArray()
    tags?: string[]

    @IsArray()
    picUrl?: string[]

    @IsBoolean()
    isAvalible: boolean
}
