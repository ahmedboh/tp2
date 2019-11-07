import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-view',
  templateUrl: './candidat-view.component.html',
  styles: []
})
export class CandidatViewComponent implements OnInit {
  tabCandidats = [
    {nom:'Popey',image:'../assets/poppey.jpg', nb:16, parti:true},
    {nom:'Sam',image:'../assets/happy.png', nb:14, parti:false },
    {nom:'Donald',image:'../assets/donald.jpg', nb:44, parti:false}
    ];
    a:boolean=this.tabCandidats[0].parti;
    b:boolean=this.tabCandidats[1].parti;
    c:boolean=this.tabCandidats[2].parti;
    nbFollow(){
      var n:number=0;
      (this.a==false)?n++:n=n;
      (this.b==false)?n++:n=n;
      (this.c==false)?n++:n=n;
      return n;
    }
    incri1(){
     this.tabCandidats[0].nb++;
    }

    incri2(){
      this.tabCandidats[1].nb++;
     }


     incri3(){
      this.tabCandidats[2].nb++;
     }
  constructor() { }

  ngOnInit() {
  }

}
