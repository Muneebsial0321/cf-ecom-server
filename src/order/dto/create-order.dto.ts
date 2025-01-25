import { Type } from "class-transformer"
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"

export class CreateOrderDto {
    @IsString()
    @IsOptional()
    userId?: string

    @IsString()
    email: string

    @IsString()
    paymentMethod: string

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => productDto)
    products: productDto[]


    // extras for development


    @IsString()
    @IsOptional()
    address?: string

    @IsString()
    @IsOptional()
    country?: string

    @IsString()
    @IsOptional()
    postalCode?: string


    @IsString()
    @IsOptional()
    extraInfo?: string


    @IsString()
    @IsOptional()
    city?: string


    @IsString()
    @IsOptional()
    phoneNumber?: string
    
}

class productDto {
    @IsString()
    productId: string
    
    @IsOptional()
    @IsString()
    colour?: string
    
    @IsOptional()
    @IsString()
    size?: string

    @IsNumber()
    quantity: number

}
