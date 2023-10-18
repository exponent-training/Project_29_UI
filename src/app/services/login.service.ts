import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer.model';
import { CustomerResponse } from '../model/CustomerResponse.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient) { }

  url = 'http://localhost:9000/login';

 loginCheck(uname:string,pass:string){
  return this._http.get<CustomerResponse>(this.url+'/'+uname+'/'+pass);
 }

}
