

import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
// import {  } from "module";
// import { ActivatedRoute, Params} from "@angular/router";
// import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  paramsSubscription: Subscription;
  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  onEdit(){
    // this.router.navigate(['/servers', this.server.id, 'edit'] );
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});

  }
  ngOnInit() {
    this.route.data
    .subscribe(
      (data: Data) => {
        this.server = data['serverOOO'];
      }
    )
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.
    //   subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   )
  }

}
