import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { LoginComponent } from './auth/login/login.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent },
    { path: 'events', component: EventsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}