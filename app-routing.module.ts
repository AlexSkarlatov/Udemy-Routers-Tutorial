// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { ErrorPageComponent } from "./error-page/error-page.component";
// import { Routes, RouterModule } from "@angular/router";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth-guard.service";

import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from "./servers/server/server-resolver.service";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
  ] },
  { path: 'servers',
    //canActivate: [AuthGuard] ,
    canActivateChild: [AuthGuard],
    component: ServersComponent,
     children: [
    { path: ':id', component: ServerComponent, resolve: {serverOOO: ServerResolver} },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'} },

  { path: '**', redirectTo: '/not-found' }
  // howt o know where to render the component on the dom??? use a special thingy on the template
];
@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
