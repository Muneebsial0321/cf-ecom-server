import { IsOptional, IsString } from "class-validator"

export class CreateCategoryDto {
    @IsString()
    name: string
    
    @IsOptional()
    @IsString()
    picUrl?: string
    
    @IsOptional()
    @IsString()
    icon?: string
}
