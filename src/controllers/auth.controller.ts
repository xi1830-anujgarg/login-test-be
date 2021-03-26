// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {
  post, Request,
  requestBody,
  RestBindings
} from '@loopback/rest';


export class AuthController {
  constructor(@inject(RestBindings.Http.REQUEST) public req: Request) {
  }
  @post('/auth')
  auth(
    @requestBody() reqParam: any
  ) {
    let isSuccess = false;
    let msg = '';
    if (reqParam && (reqParam.username === 'MTN_user' && reqParam.password === 'MTN281#^@*')) {
      isSuccess = true;
      msg = 'login sucessfully'
    } else {
      msg = 'Username or password incorrect'
    }
    return {
      status: isSuccess,
      msg
    };
  }
}
