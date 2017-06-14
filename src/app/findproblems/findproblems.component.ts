import { Component, OnInit } from '@angular/core';
import {ProblemService} from "../problem.service";
import {Problem}from"../problem/problem.component";
@Component({
  selector: 'app-findproblems',
  templateUrl: './findproblems.component.html',
  styleUrls: ['./findproblems.component.css'],
  providers:[ProblemService]
})
export class FindproblemsComponent implements OnInit {
  problems:Problem[];
  constructor(private service:ProblemService) {
    this.problems=service.getProblems();
  }
  activeProblemHandler(event:any)
  {
    this.activeProblem=event;
  }
  activeProblem:any;
  ngOnInit() {
  }

}
