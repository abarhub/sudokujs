import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GrilleComponent } from './component/grille/grille.component';
import { SelectionChiffresComponent } from './component/selection-chiffres/selection-chiffres.component';

@NgModule({
  declarations: [
    AppComponent,
    GrilleComponent,
    SelectionChiffresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
