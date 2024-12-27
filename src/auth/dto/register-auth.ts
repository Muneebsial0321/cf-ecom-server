import { IsEmail, IsString, IsStrongPassword } from "class-validator"

export class RegisterAuthDto {
    @IsString()
    name:string

    @IsEmail()
    email:string
 
    @IsString()
    password:string

    @IsString()
    provider:string = "local"


}
