import { IsString } from "class-validator"

export class CreateReviewDto {
    @IsString()
    userId:string
    
    @IsString()
    productId:string
    
    @IsString()
    message:string
}
