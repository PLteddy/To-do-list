import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo', // Ce sélecteur doit correspondre à <app-todo> dans le HTML
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
