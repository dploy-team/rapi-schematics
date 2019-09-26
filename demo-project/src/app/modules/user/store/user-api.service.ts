import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { W3AbstractRequestService } from "@dploy-team/rapi-w3";
import { UserModel } from "./user.model";

@Injectable()
export class UserApiService extends W3AbstractRequestService<UserModel>{
    
    constructor(private http: HttpClient){
        super(http)
    }

    getBaseUrl(): string {
        return `${environment.URL_API}/user`;
      }
}