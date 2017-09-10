import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home-page/home.component'
import { AppComponent } from './app.component';
import { NavComponenet } from './writer/navbar/nav.component'
import {AppRoutingModule} from "./app-routing.module";
import { WriterCompnent } from "./writer/writer.component"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponenet,
    WriterCompnent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
