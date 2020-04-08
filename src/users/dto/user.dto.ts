import { IUser } from '../interfaces'

export class UserDto implements IUser{
  id: string;
  email: string;
  fullname: string;
  lastSeen: string;
}