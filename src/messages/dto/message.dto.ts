import { IMessages } from '../interfaces'

export class MessageDto implements IMessages{
  id: string;
  text: string;
  reader: boolean;
  lastSeen: string;
  dialog: string;
  user: string;
}