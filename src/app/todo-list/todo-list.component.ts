import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: string[] = [];
  doneList: string[] = [];
  itemToAdd: string ;

  constructor() { }

  addToList(){
   if(this.itemToAdd != null && this.itemToAdd != ""){
     this.todoList.push(this.itemToAdd);
   }
  }
  undoneList(i:number){
    this.todoList.push(this.doneList[i]);
    this.doneList.splice(i, 1);
  }
  addToDoneList(i:number){
    this.doneList.push(this.todoList[i]);
    this.todoList.splice(i, 1);
  }

  ngOnInit(): void {
  }

}
