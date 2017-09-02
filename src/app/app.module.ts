import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home-page/home.component'
import { AppComponent } from './app.component';
import { NavComponenet } from './writer/navbar/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponenet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
