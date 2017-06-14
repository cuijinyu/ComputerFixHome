import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Problem}from "../problem/problem.component"
import {ProblemService} from "../problem.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
@Component({
  selector: 'app-problemlist',
  templateUrl: './problemlist.component.html',
  styleUrls: ['./problemlist.component.css'],
  providers:[ProblemService]
})
export class ProblemlistComponent implements OnInit {
  private problemId;
  dataSource:Observable<any>;
  @Output()
  find:EventEmitter<any>=new EventEmitter();
  problems;

  constructor(private rootInfo:ActivatedRoute,private http:Http) {
    this.dataSource=this.http.get('/api/problemlist').map((res)=>res.json());
  }

  ngOnInit() {
    this.problemId=this.rootInfo.params.subscribe((params:Params)=>{this.problemId=params.id});
    this.dataSource.subscribe(
      (data)=>{this.problems=data;
        for(let i=0;i<this.problems.length;i++)
        {
          this.problems[i].id=i+1;
        }});
  }
  findTheProblem(event)
  {
    this.find.emit(this.problemId);
  }
}
