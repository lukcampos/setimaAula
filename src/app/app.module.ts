import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// export de components
import {
  ListComponent,
  UserComponent,
  ListItenComponent
} from './components/index';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent,
    ListItenComponent // um webcomponet de item da lista
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // módulo que faz chamadas http/https,
    FormsModule,
    ReactiveFormsModule, // Formulários dinamicos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
