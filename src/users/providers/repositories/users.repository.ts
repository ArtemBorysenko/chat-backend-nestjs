import { Injectable } from '@nestjs/common';
import { Users } from '../../../core/database/entities'
import { Dialogs } from '../../../core/database/entities'
import { Messages } from '../../../core/database/entities'
import {getManager, getMongoRepository, getMongoManager} from "typeorm";
import {  } from '../../dto';
import {  } from '../../interfaces';

@Injectable()
export class UsersRepository {

  async getAllUsers(): Promise<any> {
    try {
      const usersRepository = getMongoManager();
      let timber2;
      const timber = await usersRepository.aggregate(Dialogs,
        [ {
          $match: {
            _id: '5e4bfb52b11eef0017cc5c58',
          }
        },
          // { $lookup:
          //     {
          //       from: 'users',
          //       localField: 'partner',
          //       foreignField: '_id',
          //       as: 'partner'
          //     }
          // },
          // { $lookup:
          //     {
          //       from: 'users',
          //       localField: 'author',
          //       foreignField: '_id',
          //       as: 'author'
          //     }
          // },
          // { $lookup:
          //     {
          //       from: 'users',
          //       localField: 'lastMessage',
          //       foreignField: '_id',
          //       as: 'lastMessage'
          //     }
          // }
        ],
        { cursor: { batchSize: 1 } }
      ).toArray(async function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        timber2 = res
        return res;
      });

      console.log(`timber = ${timber2}`);

      return await timber
      // const manager2 = getManager(); // or connection.manager
      //
      //
      // const manager = getMongoManager(); // or connection.manager
      // const timber2 = await manager.findOne('users',{ fullname: "Heroku"});
      // return timber2
    } catch (err) {
      console.log('ERROR UsersRepository: getAllUsers');
      throw err;
    }
  }

  async findUserByParams(data: any): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR UsersRepository: findUserByParams');
      throw err;
    }
  }

  async deleteUser(id: string): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR UsersRepository: deleteUser');
      throw err;
    }
  }

}
