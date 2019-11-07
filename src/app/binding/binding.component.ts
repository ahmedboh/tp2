import { Component, OnInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
   nom:string ="bo7";
   longeur:number=this.nom.length;
   NOM:string=this.nom.toUpperCase();
   age:number=20;
   actif:boolean=true;
   message:string="DSI";
    infos(){
     return this.nom +"a pour âge :"+this.age;  
   }
   
   onAfficher()
   { console.log(this.nom); }
contenu:string;

   onKeyUp(event:any)
 { 
   console.log(event.target + " "+ event.target.value);
    this.contenu = event.target.value; 
  }
  onKeyUp1(event:KeyboardEvent)
  { this.contenu = 'Bonjour '+(<HTMLInputElement>event.target).value; }
  
  onAfficherContenu(val:string)
 { console.log(val); }


  constructor() { }

  ngOnInit() {
  }

}
