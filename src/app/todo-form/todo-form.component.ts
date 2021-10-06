import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from "../shared/todos.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})
export class TodoFormComponent implements OnInit {

  title: string = ''

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo() {
    const todo: Todo = {
      id: Date.now(),
      title: this.title,
      completed: false,
      date: new Date()
    }
    this.todosService.addTodo(todo)
    this.title = ''
  }

}
