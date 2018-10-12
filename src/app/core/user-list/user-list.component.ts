import {UserModel} from '../userModule';
import {Component, OnInit, Input, AfterViewInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  public user: UserModel;
  public UserListService: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
