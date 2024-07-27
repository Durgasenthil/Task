import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Input() userId!:string;
  @Output() close = new EventEmitter<boolean>()
  title:string='';
  summary:string = '';
  dueDate:string ='';
  private taskService = inject(TasksService)

  onCancel(){
    this.close.emit()
  }

  onSubmit(){
    if(this.title || this.summary){
      this.taskService.addTask({
        title:this.title,
        summary:this.summary,
        date:this.dueDate
      }, this.userId)
    }
    this.close.emit()
  }
}
