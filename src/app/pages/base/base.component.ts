import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { Base } from '../../models/base';
import { User } from '../../models/user';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent<T extends Base> implements OnInit {
  public itemArray: T[] = [];
  public item: T;
  public userId;
  public users: User[] = []

  constructor(public router: Router, public httpSvc: HttpService<T>, public userHttp?: HttpService<User>) { }

  nevigate(path: any[]) {
    this.router.navigate(path)
  }

  getItems() {
    this.httpSvc.getItems().subscribe(data => {
      this.itemArray = data;
    })
  }

  getItemsIf(codiation: string) {
    this.httpSvc.getItemsIf(codiation).subscribe(data => {
      this.itemArray = data;
    })
  }

  getSingleItem(id: number) {
    this.httpSvc.getSingleItem(id).subscribe(data => {
      this.item = data;
    })
  }

  getUsers() {
    this.userHttp.getUsers().subscribe(data => {
      this.users = data;
    })
  }
  selectUser(userId:number){
   
    this.getItemsIf("userId=" +userId)
  }

  ngOnInit() {
  }

}
