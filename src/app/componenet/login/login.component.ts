import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/Customer.model';
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
customer1 = new Customer();
  loginData(){
    this.loginService.loginCheck(this.customer.uname,this.customer.password).subscribe(rs => {
    this.customer1 = rs;
    alert(this.customer1.role[0].rolename);
     if(this.customer1.role[0].rolename === 'admin'){
      this.router.navigate(['ad']);
     }
     if(this.customer1.role[0].rolename === 'BM'){
      this.router.navigate(['bm']);
     }
    });
  }

}
