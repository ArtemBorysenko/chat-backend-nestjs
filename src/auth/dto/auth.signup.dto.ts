import { IsEmail, Length} from 'class-validator';
import { ISignUpAuth } from '../interfaces'

export class SignUpAuthDto implements ISignUpAuth{
  @IsEmail()
  email: string;

  @Length(4, 16)
  fullname: string;

  @Length(4, 16)
  password: string;
}