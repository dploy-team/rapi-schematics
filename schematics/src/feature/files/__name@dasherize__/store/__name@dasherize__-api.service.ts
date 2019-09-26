import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { W3AbstractRequestService } from "@dploy-team/rapi-w3";
import { <%= classify(name) %>Model } from "./<%= dasherize(name) %>.model";

@Injectable()
export class <%= classify(name) %>ApiService extends W3AbstractRequestService<<%= classify(name) %>Model>{
    
    constructor(private http: HttpClient){
        super(http)
    }

    getBaseUrl(): string {
        return `${environment.URL_API}/<%= dasherize(name) %>`;
      }
}