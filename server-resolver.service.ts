import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Injectable } from "@angular/core";
import { ServersService } from "../servers.service";
interface Server {
  id: number;
  name: string;
  status: string;
}

export class ServerResolver implements Resolve<{id: number, name: string, type: string}> {


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server
  {

  }

}