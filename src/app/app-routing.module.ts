import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NavComponenet } from './writer/navbar/nav.component'
import { WriterCompnent } from './writer/writer.component'
import { HomeComponent } from './home-page/home.component'
import { ListenerCompnent } from './listener/listener.component'





const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'writer', component: WriterCompnent},
  { path: 'listener', component: ListenerCompnent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
