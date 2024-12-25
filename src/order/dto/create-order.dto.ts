import { Type } from "class-transformer"
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"

export class CreateOrderDto {
    @IsString()
    userId: string

    @IsString()
    paymentMethod: string

    @IsNumber()
    totalPrice: number

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => productDto)
    products: productDto[]
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
