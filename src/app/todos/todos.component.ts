import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service'
import { delay } from 'rxjs/operators'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})

export class TodosComponent implements OnInit {

  public loading: boolean = true
  public search: string = ''

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos()
      .pipe(delay(1000))
      .subscribe(() => this.loading = false)
  }

  onChange(id: number) {
    this.todosService.onChange(id)
  }
  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }
  loadMore() {
    this.todosService.loadMore()
  }
}
