import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;

  @Output() todoDelete : EventEmitter<Todo>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo)
  {
    console.log("on click eveny triger !");
    // now we need to pass event from todo-item-componet to todo-componet mean even emit
    this.todoDelete.emit(todo);


  }

}
 