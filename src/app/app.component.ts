import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <label>Введите количество вопросов для отображения:  </label>
  <div></div>
  <input type="number" [(ngModel)]="number">
  <button (click)="getQuestion(number)">Get random</button>
  
  
  <ul>
     <li *ngFor="let item of uniqueQuestion">{{item}}</li>
  </ul>
  `
})
export class AppComponent {
  number: number;
  questionsArray: string[] = [
    "JS?",
    "Vue?",
    "react?",
    "Angular?",
    "Webpack?",
    "Git?",
    ""
  ];
  uniqueQuestion: any[] = []; 
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
    console.log(arrayOfRandomNumber);
    //array with unique questions
    
    this.uniqueQuestion = arrayOfRandomNumber.map((item: any) => { 
      return(this.questionsArray[item]);
    });
    console.log(this.uniqueQuestion);
    

    

    

  };
};

