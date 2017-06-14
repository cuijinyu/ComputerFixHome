import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
export class Question
{

  constructor( public id:number,
               public title:string,
               public answers:string[],
               public rightAnswer:string,
               public analysis:string)
  {};
}
