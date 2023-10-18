import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private registerService: RegisterService){

  }
  ulist : string[] = [];

  ngOnInit(): void {
    console.log("=====================")
    this.registerService.getAllUname().subscribe(rs => {
      this.ulist = rs;
      console.log('------Check : ' + this.ulist);
    });
  }

}
