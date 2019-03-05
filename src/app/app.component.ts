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

  todoList: string[] = ['Estudiar Web', 'Hacer taller de MOS', 'Finalizar Entrega del CBU'];
  doingList: string[] = ['Hacer bono Web', 'Revisar Entrega Master Card'];
  doneList: string[] = ['Entregar MOS', 'Leer para el CBU', 'Estudiar SISCONGER', 'Hacer entrega Web'];

  addDone(){
    this.doneList.push(this.newDone);
  }
  addTodo(){
    this.todoList.push(this.newTodo);
  }
  addDoing(){
    this.doingList.push(this.newDoing);
  }
  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer !== event.container){
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    else{
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
