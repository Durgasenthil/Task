import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
@Input() user!:User;
@Output() select = new EventEmitter<string>();

onSelecteduser(){
this.select.emit(this.user.id)
}

get imagePath(){
  return "assets/users/"+this.user.avatar;
}
}
