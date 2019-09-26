import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { <%= classify(name) %>Effects } from "./<%= dasherize(name) %>.effects";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as from<%= classify(name) %> from "./<%= dasherize(name) %>.reducer";
import { <%= classify(name) %>ApiService } from "./<%= dasherize(name) %>-api.service"

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature("<%= classify(name) %>", from<%= classify(name) %>.reducer),
        EffectsModule.forFeature([<%= classify(name) %>Effects]),
    ],
    providers: [<%= classify(name) %>ApiService]

})
export class <%= classify(name) %>StoreModule { }