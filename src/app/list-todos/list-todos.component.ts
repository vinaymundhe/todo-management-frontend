import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor,NgIf,UpperCasePipe,DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})

export class ListTodosComponent {

  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'Become expert at angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date()),
  ]
}
