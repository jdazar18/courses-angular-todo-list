import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  @HostBinding('attr.class') cssClass = 'container';

  todos : string[];

  constructor() {
    this.todos = [];
  }

  addTodo(todo : string) {
    this.todos.push(todo);
    return false;
  }

}
