import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'lifeCycleHooks';

  constructor(){
    console.log('Constructor Called.');
    this.title = 'Life Cycle Hooks.';
  }
  ngOnInit(): void {
   console.log('Ng On Init Called.');
   this.title = 'Life Cycle Hooks. After Constructor';
  }
}
