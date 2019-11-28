import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Todo } from '../../models/todo';
import { HttpService } from '../../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent extends BaseComponent<Todo> implements OnInit {

  constructor(public router: Router, public httpSvc: HttpService<Todo>, public userHttp: HttpService<User>) {
    super(router, httpSvc, userHttp)
  }


  ngOnInit() {
    this.httpSvc.api = "https://jsonplaceholder.typicode.com/todos"
    this.userId = history.state.id;
    console.log("userId: ", this.userId);

    if (this.userId > -1) {
      this.getItemsIf('userId=' + this.userId);

    } else {
      this.getItems();
      this.getUsers();
    }
  }
}


