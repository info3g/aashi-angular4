import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {


  private dummyurl : string = "http://jsonplaceholder.typicode.com/users";

  private url: string = "http://localhost/test";

  private urlAdd : any = "http://localhost/test/";

  private urlUpdate : any = "http://localhost/test/";

  private urlDelete : any = "http://localhost/test/";

  private urlgetByid : any = "http://localhost/test/";

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getUser(id){
    return this.http.get(this.urlgetByid+id)
      .map(res => res.json());
  }

  addUser(user){
    return this.http.post(this.urlAdd, JSON.stringify(user))
      .map(res => res.json());
  }

  updateUser(user){
    return this.http.put(this.urlUpdate(user.id), JSON.stringify(user))
      .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete(this.urlDelete + id)
      .map(res => res.json());
  }

  private getUserUrl(id){
    return this.url + "/" + id;
  }
}
