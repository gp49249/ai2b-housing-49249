import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  elements: string[];
  inputText: string;

  constructor() {
    this.inputText = '';
    this.elements = [];
  }

  inputToArray() {
    if (this.inputText.trim() !== '') {
      this.elements.push(this.inputText);
      this.inputText = '';
    }
  }

  remove(index: number): void {
    this.elements.splice(index, 1);
  }
}
