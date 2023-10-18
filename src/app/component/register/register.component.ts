import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/Customer.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private registerService : RegisterService ){
  }
  
  
  //id:0 | undefined;
customer = new Customer();
customer1 = new Customer();
id : number | undefined;

str: string='';


  registerData(){
      //console.log(this.id + '  ' + this.name + ' ' + this.address+ '  ' + this.uname + '   ' + this.pass);
      console.log("Check Data : " + this.customer);
      console.log('check updated User : '+ this.customer1.firstname);
      console.log("----------------- : " +JSON.stringify(this.customer));
      this.registerService.saveUser(this.customer);
      console.log("===================================");
  }

  getData(id:any){
     console.log('============ ' + id);
      this.registerService.getData(id).subscribe(rs=>{
        this.customer1 = rs;
        console.log('Data: ' + this.customer1);
      });
  }

  updateData() {
    console.log('check updated User : '+ this.customer1.firstname);
    console.log("----------------- : " +JSON.stringify(this.customer));
    this.str = this.registerService.updateUser(this.customer1);
    alert('#######: ' + this.str);
  }
}

 

