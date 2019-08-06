import sampleJSON from './sampleJSON.json';

export class CreateArrayForDisplay {
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
        //if (!(/http:/i.test(this.uniqueQuestion[i])) && !(/https:/i.test(this.uniqueQuestion[i])))
        if (!(this.uniqueQuestion[i].includes("http"))) 
        {
          this.arrayStrings.push(this.uniqueQuestion[i]);
        } else {
          this.arrayUrl.push(this.uniqueQuestion[i]);
          };
         
      };
      //console.log(this.questionsArray);    
      // console.log(this.arrayStrings);
        // console.log(this.arrayUrl);

    };
getArrayStrings() {
    return this.arrayStrings;
};
getArrayUrl() {
    return this.arrayUrl;
}    
};