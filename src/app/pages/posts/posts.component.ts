import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { Post } from '../../models/post';
import { User } from '../../models/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent extends BaseComponent<Post> implements OnInit {
public plag:boolean = false
  constructor(public router:Router,public httpSvc:HttpService<Post>,userSvc:HttpService<User>) { 
    super(router,httpSvc,userSvc)
  }

  ngOnInit() {
    this.httpSvc.api = "https://jsonplaceholder.typicode.com/posts"
       this.userId = history.state.id;
      console.log("userId: ",this.userId);

 if( this.userId > -1){
      this.getItemsIf('userId='+ this.userId)  
 }
 else{
      this.getItems();
      this.getUsers();
    }
  }
}


