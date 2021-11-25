import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "./todos.service";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(todos: Todo[], search: string = ''): Todo[] {
    if (!search.trim()) return todos
    return todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
  }
}
