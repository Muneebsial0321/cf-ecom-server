import { Transform } from "class-transformer"
import { IsArray, IsBoolean, isNumber, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateProductDto {
    @IsString()
    name: string

    @IsString()
    desc: string

    @IsOptional()
    @IsString()
    categoryId?: string

    @IsOptional()
    @IsString()
    brandId?: string

    @Transform(({ value }) => +value)
    @IsNumber()
    price: number

    @Transform(({ value }) => {
        try {
            return typeof value === 'string' ? JSON.parse(value) : value;
        } catch (error) {
            return value;
        }
    })
    @IsArray()
    @IsOptional()
    colour?: string[]

    @Transform(({ value }) => {
        try {
            return typeof value === 'string' ? JSON.parse(value) : value;
        } catch (error) {
            return value;
        }
    })
    @IsArray()
    @IsOptional()
    size?: string[]

    @Transform(({ value }) => {
        try {
            return typeof value === 'string' ? JSON.parse(value) : value;
        } catch (error) {
            return value;
        }
    })
    @IsArray()
    @IsOptional()
    tags?: string[]

    @IsOptional()
    @IsArray()
    picUrl?: string[]

    @IsOptional()
    @IsBoolean()
    isAvalible?: boolean

}
