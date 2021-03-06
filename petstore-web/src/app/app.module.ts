import './rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PetDetailComponent} from './pet-details/pet-detail.component';
import {PetSearchComponent} from './pet-search/pet-search.component';
import {PetsComponent} from './pets/pets.component';
import {PetService} from './pets/pet.service';
import {AuthService} from './auth/auth.service';

import {routing} from './app.routing';
import {MessageService} from './messages/message.service';
import {MessagesComponent} from './messages/messages.component';
import {HomeComponent} from './home/home.component';
import {CallbackComponent} from './callback/callback.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    PetDetailComponent,
    PetSearchComponent,
    PetsComponent,
    HomeComponent,
    CallbackComponent
  ],
  providers: [HttpClientModule, MessageService, PetService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
