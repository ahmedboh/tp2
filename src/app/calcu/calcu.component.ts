import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styles: []
})
export class CalcuComponent implements OnInit {
  carre:number;
  somme:number;

  onCarre(event:any){
    this.carre=event.target.value*event.target.value;
  }
 onSomme(val:number,val2:number){
   this.somme=Number(val)+Number(val2);
 }
  constructor() { }

  ngOnInit() {
  }

}
