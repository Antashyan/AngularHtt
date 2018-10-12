import {Observable} from 'rxjs';
import {UserModel} from '../userModule';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class UserListService {

  constructor(private httpClient: HttpClient) {
  }

  public getUsers(): Observable<Array<UserModel>> {
    return this.httpClient.get<Array<UserModel>>('https://jsonplaceholder.typicode.com/users');
  }
}

