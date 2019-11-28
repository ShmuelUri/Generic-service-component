import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service';
import { BaseComponent } from '../base/base.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent extends BaseComponent<User> implements OnInit {
   public userid = parseInt(this.route.snapshot.paramMap.get("id"))
  constructor(router:Router,http:HttpService<User>,public route:ActivatedRoute) { 
    super(router,http)
  }

  ngOnInit() {
    this.httpSvc.api = "https://jsonplaceholder.typicode.com/users"
     let id = parseInt(this.route.snapshot.paramMap.get("id"))
    this.getSingleItem(id)
  }
  
  nav(navi:string):void{
    let parent = "/currentUser/"
    this.router.navigateByUrl(parent + this.userid +"/"+ navi , {state:{id:this.userid}})
  }
}
