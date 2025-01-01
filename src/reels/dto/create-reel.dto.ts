import { IsOptional, IsString } from "class-validator"

export class CreateReelDto {


    @IsString()
    desc: string

    @IsString()
    userId: string
    
    @IsString()
    productId: string
    
    @IsString()
    videoUrl: string


}
