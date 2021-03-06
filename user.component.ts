import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;
  constructor(private rt: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.rt.snapshot.params['id'],
      name: this.rt.snapshot.params['name']
    };
    this.paramsSubscription = this.rt.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
