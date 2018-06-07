import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//navigation için import edildi
    FormsModule//ngModel kullanımı için import edildi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
