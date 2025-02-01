import { IsOptional, IsString } from "class-validator"

export class CreateReelDto {
    @IsString()
    desc: string

    @IsOptional()
    @IsString()
    userId: string
    
    @IsString()
    videoUrl: string


}
