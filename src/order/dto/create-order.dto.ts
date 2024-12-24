import { IsArray, IsNumber, IsString } from "class-validator"

export class CreateOrderDto {
    @IsString()
    userId: string

    @IsString()
    paymentMethod: string
   
    @IsNumber()
    totalPrice: number

    @IsArray()
    products: Array<{ productId: string }>
}
