import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bono1Parcial';
  newDone: string = "";
  newTodo: string = "";
  newDoing: string = "";

  todoList: string[] = [];
  doingList: string[] = [];
  doneList: string[] = [];

  addTodo() {
    this.todoList.push(this.newTodo);
  }
  addDone() {
    this.doneList.push(this.newDone);
  }
  addDoing() {
    this.doingList.push(this.newDoing);
  }
  deleteTodo(task: string) {
    var index = this.todoList.indexOf(task, 0);
    if (index > -1) {
      this.todoList.splice(index, 1);
    }
  }
  deleteDoing(task: string) {
    var index = this.doingList.indexOf(task, 0);
    if (index > -1) {
      this.doingList.splice(index, 1);
    }
  }
  deleteDone(task: string) {
    var index = this.doneList.indexOf(task, 0);
    if (index > -1) {
      this.doneList.splice(index, 1);
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
