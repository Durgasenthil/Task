import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';
  selectedUserId?:string

  users = DUMMY_USERS;

  get selectedUser(){
    return this.users.find((d)=>d.id === this.selectedUserId)
  }

  onSelectedUser(id:string){
    this.selectedUserId = id;
    console.log(id)
  }
}
