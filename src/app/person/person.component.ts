import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: []
})
export class PersonComponent implements OnInit {
  nom:string=prompt('saisir votre nom');
  age:number=Number(prompt('saisir votre age '));
  img:string="assets/poppey.jpg";
  mineur(){
    return (this.age>17)? false:true;
  }

  constructor() { }

  ngOnInit() {
  }

}
