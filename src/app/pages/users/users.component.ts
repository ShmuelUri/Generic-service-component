import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends BaseComponent<User> implements OnInit {

  constructor(public router:Router,public httpSvc:HttpService<User>) {
    super(router,httpSvc)
   }

  ngOnInit() {
     this.httpSvc.api = "https://jsonplaceholder.typicode.com/users"
    this.getItems()
  }

  selectUser(id:number){
    // this.nevigate(["currentUser",id+""]);
    this.router.navigateByUrl('currentUser/'+id+"",{state:{id:id}})
  }

}
