import { Component } from '@angular/core';
import sampleJSON from './sampleJSON.json';

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
  `
})
export class AppComponent {
  number: number;
  questionsArray: string[] = [...sampleJSON];
  
  uniqueQuestion: any[] = []; 
  arrayStrings: string[] = [];
  arrayUrl: string[] = [];
  getRandomNumber() {
    let randomNumber: number = Math.floor((Math.random()*this.questionsArray.length));
    return randomNumber;
  };
  
  getQuestion(number: number) {
    let elementsInArray: number = this.questionsArray.length - 1;
    let arrayOfRandomNumber: number[] = [];
    //create array with unique numbers of questions
    while (arrayOfRandomNumber.length != elementsInArray) {
      let tempNumber: number;
      tempNumber = this.getRandomNumber();
      if (!arrayOfRandomNumber.includes(tempNumber)) {
        arrayOfRandomNumber.push(tempNumber);
      } else {tempNumber = this.getRandomNumber()};
      arrayOfRandomNumber.sort();
      if (arrayOfRandomNumber.length == number) {
        break;
      };
    };
    //.log(arrayOfRandomNumber);
    //array with unique questions
    this.uniqueQuestion = arrayOfRandomNumber.map((item: any) => { 
      return(this.questionsArray[item]);
    });
    //console.log(this.uniqueQuestion);
    
    for (let i = 0; i < this.uniqueQuestion.length; i++) {
      if (!(this.uniqueQuestion[i].includes("http")) && (this.uniqueQuestion[i].lastIndexOf('?') == this.uniqueQuestion[i].length - 1)) {
        this.arrayStrings.push(this.uniqueQuestion[i]);
      } else {
        this.arrayUrl.push(this.uniqueQuestion[i]);
        };
    };
    //console.log(this.questionsArray);    
    // console.log(this.arrayStrings);
        // console.log(this.arrayUrl);
  };
};

