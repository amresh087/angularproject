import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() todoAdd : EventEmitter<Todo>=new EventEmitter();

 title!: string;
 sno!: number;
 desc!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {

    const todo={
      sno: this.sno,
      title: this.title,
      desc:this.title,
      active:true
    }

    this.todoAdd.emit(todo);
    
    
    
  }

}
