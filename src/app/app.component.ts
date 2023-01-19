import { Component } from '@angular/core';
import { timer } from 'rxjs';

class TestQuestion
{
  Question : String;
  Options  : String[];
  QuestionType : String;

  constructor(question : String, options : String[], questiontype : String)
  {
    this.Question = question;
    this.Options = options;
    this.QuestionType = "";
  }
}

enum QuizState
{
  Start     = 'Quiz Start',
  Questions = 'Quiz Questions',
  Finish    = 'Quiz Finish'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Quiz';
  name = 'Bolu';

  quizTime = 5;
  quizState = QuizState.Start;
  timeLeft = this.quizTime * 60;
  questionCount = 10
  subscribeTimer : any;  
  currentQuestion = 1

  questionList: TestQuestion[];

  constructor(){
    this.questionList = [];
    for(let i = 0; i <= this.questionCount; i++){
      this.questionList.push(new TestQuestion("Question " + i,["O1","O2","O3"],""));
    }
    
  }
  
  ngOnInit() : void {
  }

  private oberserableTimer() {
      const source = timer(this.timeLeft, 1000);
      const abc = source.subscribe(val => {
      this.subscribeTimer = (this.timeLeft - val);

      const stopTimer = timer(this.quizTime * (60 * 1000));
      stopTimer.subscribe(val => {this.finishQuiz()})
    });
  }

  startQuiz()
  {
    this.quizState = QuizState.Questions
    this.oberserableTimer();
  }

  nextQuestion()
  {
    if(this.currentQuestion < this.questionCount)
    {
      this.currentQuestion += 1
    }
  }

  prevQuestion()
  {
    if(this.currentQuestion > 1)
    {
      this.currentQuestion -= 1
    }
  }

  finishQuiz()
  {
    this.quizState = QuizState.Finish
  }
}
