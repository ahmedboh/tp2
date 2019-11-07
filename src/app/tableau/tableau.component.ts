import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
 tabNb:number[]=[17,54,88,23];
 titre:string="opération sur un tableau:"
 min(){
   var n:number=this.tabNb[1];
   for(let i:number=1;i<this.tabNb.length ; i++ ){
        if (n>this.tabNb[i]){
          n=this.tabNb[i];
        }
    }
    return n;
  }
  moy(){
    var s:number=0;
    for(let t of this.tabNb){
       s+=t;
    }
    return s/4;
  }
  constructor() { }

  ngOnInit() {
  }

}
