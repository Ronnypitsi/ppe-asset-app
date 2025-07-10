import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { AuthStoreModule } from "./auth-store/auth-store.module";
import { CommonModule } from "@angular/common";


@NgModule({
    imports:[
        CommonModule,
        NgxsModule.forRoot([],{developmentMode:true}),
        AuthStoreModule

    ],
    declarations:[]
})
export class AutNgxsStoreModule{}