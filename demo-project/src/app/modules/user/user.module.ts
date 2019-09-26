import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "projects/commons/shared/shared.module";
import { UserStoreModule } from "./store/user-store.module";
import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routes";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SharedModule,
        UserStoreModule,
        RouterModule.forChild(UserRoutes)
    ]
})
export class UserModule { }