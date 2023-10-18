import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/Customer.model';
import { CustomerResponse } from 'src/app/model/CustomerResponse.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService : LoginService,private router: Router){

  }
  

customer = new Customer();
customerResponse1 = new CustomerResponse();
  loginData(){
    this.loginService.loginCheck(this.customer.uname,this.customer.password).subscribe(rs => {
    this.customerResponse1 = rs;
    alert(this.customerResponse1.rolename);
     if(this.customerResponse1.rolename === 'admin'){
      this.router.navigate(['ad']);
     }
     if(this.customerResponse1.rolename === 'BM'){
      this.router.navigate(['bm']);
     }
    });
  }

}
