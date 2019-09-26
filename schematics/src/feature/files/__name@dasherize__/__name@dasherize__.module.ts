import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "projects/commons/shared/shared.module";
import { <%= classify(name) %>StoreModule } from "./store/<%= dasherize(name) %>-store.module";
import { RouterModule } from "@angular/router";
import { <%= classify(name) %>Routes } from "./<%= dasherize(name) %>.routes";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SharedModule,
        <%= classify(name) %>StoreModule,
        RouterModule.forChild(<%= classify(name) %>Routes)
    ]
})
export class <%= classify(name) %>Module { }