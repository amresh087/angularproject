import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() {
    this.todos=[
      {
        sno : 8,
        title : "this is my title 1",
        desc : "description",
        active : true
      },
      {
        sno : 9,
        title : "this is my title 3",
        desc : "description 2",
        active : true
      },
      {
        sno : 10,
        title : "this is my title 3",
        desc : "description 3",
        active : true
      }
    ]

   }

  ngOnInit(): void {
  }

  deleteTodoItem(todo:Todo){
    console.log(todo);
  const index=this.todos.indexOf(todo);
  console.log(index);
  this.todos.splice(index,1);
  }


  addTodoItem(todo:Todo){
  console.log(todo);
  this.todos.push(todo);

  }



}
