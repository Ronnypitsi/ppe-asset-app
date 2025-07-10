import { DecodedToken } from "src/app/core/models/decoded-token";
import { AuthenticateUserCommand } from "src/app/core/services/api.service";


export class LoginAction {
  static readonly type = '[Auth] Login Action';
  constructor(public payload: {authenticateUserCommand:AuthenticateUserCommand,redirectUrl?:string}) {}
}
export class LoginSuccessAction{
  static readonly type = '[Auth] Login Success';
  constructor(public payload:{decodedToken:DecodedToken,redirectUrl?:string}){}

}