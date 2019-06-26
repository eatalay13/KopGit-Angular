import { Injectable } from '@angular/core';
import { ServiceBase } from '../base-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user-models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceBase {

  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<User[]> {
    return this.http.get<User[]>(this.path + 'user');
  }

}
