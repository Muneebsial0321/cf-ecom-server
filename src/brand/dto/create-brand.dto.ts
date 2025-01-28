import { IsOptional, IsString } from "class-validator"

export class CreateBrandDto {
    @IsString()
    name: string
    
    @IsString()
    picUrl: string
    
    @IsOptional()
    @IsString()
    desc?: string
}
