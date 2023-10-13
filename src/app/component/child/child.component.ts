import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, OnDestroy,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges,OnInit{
  ngOnInit(): void {
    console.log('Ng On init Method not implemented.');
  }
 
  ngOnChanges(changes: SimpleChanges): void {
       console.log('After Changes Value : ' + changes['user'].currentValue);     
  }

  ngDoCheck(){
    console.log('Ng Do Check Method Called..');
  }

  ngOnDestroy(){
    console.log('Child Destroy');
  }

  @Input() user='';


}
