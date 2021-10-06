 import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

export interface Todo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  public todos: Todo[] = []
  private limit: number = 3

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${this.limit}`)
      .pipe(tap(todos => this.todos = todos))
  }

  onChange(id: number) {
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)
  }
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
  loadMore() {
    this.limit += 3
    this.getTodos().subscribe()
  }
}
