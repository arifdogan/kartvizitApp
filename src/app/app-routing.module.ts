import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },//uzantı yok ise anasayfaya gidecek
  { path: 'home', component : HomeComponent},
  { path: 'card', component : CardComponent},
  { path: 'about', component : AboutComponent},
  { path: 'contact', component : ContactComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
