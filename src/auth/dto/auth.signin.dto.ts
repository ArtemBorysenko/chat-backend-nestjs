import { IsEmail, Length} from 'class-validator';
import { ISignInAuth } from '../interfaces'

export class SignInAuthDto implements ISignInAuth{
  @IsEmail()
  email: string;

  @Length(4, 16)
  password: string;
}