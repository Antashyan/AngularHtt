import {Component, OnInit} from '@angular/core';
import {UserModel} from './core/userModule';
import {UserListService} from './core/services/user-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public users: UserModel[];

  constructor(private usersSet: UserListService) {
  }

  ngOnInit() {
    this.usersSet.getUsers().subscribe((data) => {
           this.users = data;
      },
      (error) => {
      });
  }

}
