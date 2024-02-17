import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GrilleComponent } from './component/grille/grille.component';
import { SelectionChiffresComponent } from './component/selection-chiffres/selection-chiffres.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './component/toggle/toggle.component';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GrilleComponent,
    SelectionChiffresComponent,
    ToggleComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
