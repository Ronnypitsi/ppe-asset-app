import { Action, Selector, State, StateContext } from "@ngxs/store";
/* import { LoginAction } from "./auth.actions"; */
import { catchError, tap, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { IssuedToken, UserClient } from "src/app/core/services/api.service";
import { LoginAction, LoginSuccessAction } from "./auth.actions";
import { JwtHelperService } from "@auth0/angular-jwt";
import { DecodedToken } from "src/app/core/models/decoded-token";
import { Router } from "@angular/router";


export interface AuthStateModel {
   items: string[];
  decodedToken:DecodedToken;
  isLoading: boolean;
}

@State<AuthStateModel>({
  name: 'Auth',
  defaults: {
    items: [],
    decodedToken:{
          expires:"",
          firstName:"",
          lastName:"",
          email:"",
          role:"",
          token:"",
          uid:"",
    },
    isLoading:false
  }
})
@Injectable()
export class AuthState {
  jwtHelper = new JwtHelperService();

  constructor(private userClient : UserClient,private router: Router){}

  @Selector()
  static getDecodedToken(state:AuthStateModel):DecodedToken{
    return state.decodedToken;
  }
  @Selector()
  static getHasValidToken(state:AuthStateModel):boolean{
    debugger
    return !! (state.decodedToken.token!=='' && state.decodedToken.expires!=='' && new Date() < new Date(state.decodedToken.expires)? true:false);
  }
  @Action(LoginAction)
  loginAction(ctx: StateContext<AuthStateModel>,action:LoginAction){
    ctx.patchState({ isLoading:true})

    return this.userClient.authUser(action.payload.authenticateUserCommand).pipe(
      tap((issuedToken)=>{
        console.log(issuedToken);
        console.log(new Date());
         console.log(this.decodeToken(issuedToken));
         ctx.dispatch(new LoginSuccessAction({decodedToken:this.decodeToken(issuedToken),redirectUrl:action.payload.redirectUrl}))
      }),
      catchError((error)=> {
        return throwError(error);

      })
    );

  }

  @Action(LoginSuccessAction)
  loginSuccessAction({dispatch,patchState,getState}:StateContext<AuthStateModel>, action:LoginSuccessAction){
    
    patchState({
      decodedToken:action.payload.decodedToken
    });
    debugger
    const n=getState();
    if(action.payload.redirectUrl){
      dispatch( this.router.navigateByUrl(action.payload.redirectUrl));

    }

  }

  decodeToken(issuedToken:IssuedToken):DecodedToken{
    debugger
    if(issuedToken && issuedToken.token && issuedToken.expiresIn){
        const decoded = this.jwtHelper.decodeToken(issuedToken.token);
        return {
          expires:new Date(Date.now() + issuedToken.expiresIn * 1000).toISOString(),
          firstName:decoded.firstName,
          lastName:decoded.lastName,
          email:decoded.email,
          role:decoded.roles,
          token:issuedToken.token,
          uid:decoded

        }
    }
    return  {
          expires:"",
          firstName:"",
          lastName:"",
          email:"",
          role:"",
          token:"",
          uid:"",

        }
  }
  
}