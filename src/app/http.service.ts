import { Injectable } from '@angular/core';
import { Base } from './models/base';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class HttpService <T extends Base> {
 
  public api : string;
  constructor(public http:HttpClient) { }

  /*getItems():Observable<T[]>{
      return this.http.get<T[]>(this.api)
  }*/

  getItems(querystring?:string):Observable<T[]>{
    return this.http.get<T[]>(this.api + (querystring ? '?' + querystring : ''))
  }


  getItemsIf(condition:string):Observable<T[]>{
    return this.http.get<T[]>(`${this.api}?${condition}`)
  }

  getSingleItem(id:number):Observable<T>{
    return this.http.get<T>(`${this.api}/${id}`)
  }

  getUsers():Observable<User[]>{
      return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

}
