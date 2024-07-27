import { Component, inject, Input } from '@angular/core';
import { User } from '../user/user.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() name!:string;
  @Input() userId!:string;
  isAddingTask:boolean=false;
  private taskService = inject(TasksService)

  onAddTask(){
    this.isAddingTask =true
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

  get selectedUserTasks() {
    return this.taskService.getTasks(this.userId);
  }
}
