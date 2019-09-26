import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserEffects } from "./user.effects";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromUser from "./user.reducer";
import { UserApiService } from "./user-api.service"

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature("User", fromUser.reducer),
        EffectsModule.forFeature([UserEffects]),
    ],
    providers: [UserApiService]

})
export class UserStoreModule { }