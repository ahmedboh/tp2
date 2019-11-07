import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styles: []
})
export class ProduitComponent implements OnInit {
  val1: number=0;
  val2: number=0;
  prod: number=0;
  produit() {
      this.prod = this.val1 * this.val2;
  }
  constructor() { }

  ngOnInit() {
  }

}
