import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { AvailableEventsComponent } from './events/available-events/available-events.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { EventsService } from './events/events.service';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { UserEventsComponent } from './events/user-events/user-events.component';
import { EventComponent } from './events/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    EventsComponent,
    EventListComponent,
    AvailableEventsComponent,
    MainPageComponent,
    HeaderComponent,
    SidenavListComponent,
    UserEventsComponent,
    EventComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [EventsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
