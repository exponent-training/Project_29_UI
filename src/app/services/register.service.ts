import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:9000';

  customer1 = new Customer();
  str : string = '';
  constructor(private _http : HttpClient) { }

    saveUser(customer : Customer){
       console.log("==== : " + customer.id);
       //this._http.post<User>('http://localhost:9000/save', user);
       this._http.post(this.url+`/save`, customer).subscribe();
    }
 
   public  getData(id:any): Observable<Customer>{
      return this._http.get<Customer>(this.url + '/get/' + id);
    }

    updateUser(customer : Customer): any{
       this._http.put<string>(this.url+'/update',customer).subscribe(rs=>{
        this.str = rs;
        return rs;
       });
    }

    getAllUname() : Observable<string[]> {
      return this._http.get<string[]>(this.url+'/alluname');
    }
}
