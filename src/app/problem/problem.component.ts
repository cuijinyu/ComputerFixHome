import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class Problem{
  constructor(public id:number,
  public problemname:string,
  public solveway:string){}
}
