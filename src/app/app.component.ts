import { Component } from '@angular/core';

import {CreateArrayForDisplay} from './data.service';

@Component({
  selector: 'app-root',
  template: `
  <label>Введите количество вопросов для отображения:  </label>
  <div></div>
  <input type="number" [(ngModel)]="number">
  <button (click)="getQuestion(number)">Get random</button>
  <ul >
  <li *ngFor="let item of arrayStrings">{{item}} </li>
  </ul>
  
  <div *ngFor="let i of arrayUrl">
  
    <img src="{{i}}" alt = "logo">
 
  </div>
  `,
  providers: [CreateArrayForDisplay]
})
export class AppComponent {
  arrayStrings: [] = [];
  arrayUrl: [] = [];
  createArrayForDisplay: any;
  constructor ( createArrayForDisplay: CreateArrayForDisplay) {    
    
  };
  getQuestion(number: number) {
    this.createArrayForDisplay.getQuestion(number);
  }
  
  ngOnInit(){
    
    this.arrayStrings = this.createArrayForDisplay.getArrayStrings(); 
    this.arrayUrl = this.createArrayForDisplay.getArrayUrl(); 
  };
};

// Backendless JS-SDK
//https://www.educba.com/typescript-type-vs-interface/