import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TableauComponent } from './tableau/tableau.component';
import {FormsModule} from  '@angular/forms';
import { PersonComponent } from './person/person.component';
import { CalcuComponent } from './calcu/calcu.component';
import { ProduitComponent } from './produit/produit.component';
import { CandidatViewComponent } from './candidat-view/candidat-view.component';
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TableauComponent,
    PersonComponent,
    CalcuComponent,
    ProduitComponent,
    CandidatViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
