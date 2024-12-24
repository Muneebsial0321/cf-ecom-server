import { IsString } from "class-validator"
export class UpdateUserDto {
    @IsString()
    role: string

    @IsString()
    picUrl: string

    @IsString()
    picName: string

    @IsString()
    desc: string

    @IsString()
    gender: string
}
