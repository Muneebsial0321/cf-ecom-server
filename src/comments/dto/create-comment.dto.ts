import { IsString } from "class-validator"

export class CreateCommentDto {
    @IsString()
    message :string
    
    @IsString()
    reelId :string
    
    @IsString()
    userId  :string
}
