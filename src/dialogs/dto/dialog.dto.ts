import { IDialogs } from '../interfaces'

export class DialogsDto implements IDialogs{
  id: string;
  author: string;
  partner: string;
  lastMessage: string;
}
