import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Album } from '../../models/album';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent extends BaseComponent<Album> implements OnInit {

  constructor(public router:Router,public httpSvc:HttpService<Album>,public userSvc:HttpService<User>) {
      super(router,httpSvc,userSvc)
      
   }

  ngOnInit() {
    this.httpSvc.api = "https://jsonplaceholder.typicode.com/todos"
    this.userId = history.state.id;
    console.log("userId: ",this.userId);
  
   if( this.userId > -1){
        this.getItemsIf('userId='+ this.userId)  
   }else{
        this.getItems()
        this.getUsers()
   }
  }

}
