import { IsString } from "class-validator"

export class CreateLikeDto {
    @IsString()
    reelId: string

    @IsString()
    userId: string
}
