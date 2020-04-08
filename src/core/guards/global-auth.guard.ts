import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import fs = require('fs');

import { verify } from 'jsonwebtoken'


import { JwtAuthGuard } from '../../auth/passport/JWT-auth.guard';


import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { jwtConstants } from '../../auth/constants';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor( private readonly reflector: Reflector ) {
  }


  public canActivate( context: ExecutionContext ): any {
    try {
      const isPublic = this.reflector.get<boolean>( "isPublic", context.getHandler() );

      if ( isPublic ) {
        return true;
      }
      // const obj = context.switchToRpc();
      let token = context.switchToHttp().getRequest().headers.authorization;

      if(!token) {
        console.log(token);
        return false;}
      token = token.slice(7, token.length)
      const decodedData = verify(token, 'secretKey')
      console.log(decodedData);
      return true
      // console.log(context.switchToHttp().getRequest().headers);

      // fs.writeFileSync('a.json', JSON.stringify(obj));
      // return false;
      // return app.useGlobalPipes(JwtAuthGuard);

      // (function(console: any){
      //
      //   function censor(censor) {
      //     let i = 0;
      //
      //     return function(key, value) {
      //       if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value)
      //         return '[Circular]';
      //
      //       if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
      //         return '[Unknown]';
      //
      //       ++i; // so we know we aren't using the original object anymore
      //
      //       return value;
      //     }
      //   }
      //
      //   console.save = function(data, filename){
      //
      //     if(!data) {
      //       console.error('Console.save: No data')
      //       return;
      //     }
      //
      //     if(!filename) filename = 'console.json'
      //
      //     if(typeof data === "object"){
      //       data = JSON.stringify(data, censor(data))
      //     }
      //
      //     const blob = new Blob([data], {type: 'text/json'}),
      //       e    = document.createEvent('MouseEvents'),
      //       a    = document.createElement('a')
      //
      //     a.download = filename
      //     a.href = window.URL.createObjectURL(blob)
      //     a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
      //     e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      //     a.dispatchEvent(e)
      //   }
      //
      //   console.save(context, 'text/json')
      //
      // })(console)
    } catch (err) {
      console.log(err);
      throw err;
    }

  }
}