import { Component, OnInit } from '@angular/core';
import {Question} from"../question/question.component"
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import 'rxjs';
@Component({
  selector: 'app-must',
  templateUrl: './must.component.html',
  styleUrls: ['./must.component.css']
})
export class MustComponent implements OnInit {
  dataSource:Observable<any>;
  Questions:Array<any>=[];
  constructor(private http:Http) {
    this.dataSource=this.http.get('/api/mustquestions').map((res)=>res.json());
  }
  QuestionNumber=1;
  answer:boolean=true;
  ngOnInit() {
    this.dataSource.subscribe(
      (data)=>this.Questions=data
    );
  }
  answerIt()
  {
    if(this.answer==false)
    {
      this.answer=true;
    }else{
      this.answer=false;
    }
  }

  nextQuestion()
  {
    if((this.QuestionNumber+1)>this.Questions.length)
    {
      this.QuestionNumber=this.QuestionNumber;
      this.answer=true;
    }else {
      this.QuestionNumber += 1;
      this.answer=true;
    }
  }
  previousQuestion()
  {
    if((this.QuestionNumber-1)<=0)
    {
      this.QuestionNumber=this.QuestionNumber;
      this.answer=true;
    }else {
      this.QuestionNumber -= 1;
      this.answer=true;
    }
  }
}
