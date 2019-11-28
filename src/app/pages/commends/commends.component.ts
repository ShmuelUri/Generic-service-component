import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { BaseComponent } from '../base/base.component';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-commends',
  templateUrl: './commends.component.html',
  styleUrls: ['./commends.component.css']
})
export class CommendsComponent extends BaseComponent<Comment> implements OnInit {
@Input() postId;
  constructor(public router:Router,public httpSvc:HttpService<Comment>) {
        super(router,httpSvc)
   }

  ngOnInit() {
    this.httpSvc.api = "https://jsonplaceholder.typicode.com/comments"
    
    console.log("postId ",this.postId);


    this.getItemsIf('postId='+ this.postId)  

  }

}




