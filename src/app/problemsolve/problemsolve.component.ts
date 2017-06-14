import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Problem} from "../problem/problem.component";
import {ProblemService} from "../problem.service";
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Component({
  selector: 'app-problemsolve',
  templateUrl: './problemsolve.component.html',
  styleUrls: ['./problemsolve.component.css'],
})
export class ProblemsolveComponent implements OnInit {
  dataSource:Observable<any>;
  private problemId;
  @Input()
  private activeProblem:any;
  constructor(private rootInfo:ActivatedRoute,private http:Http) {
    this.dataSource=this.http.get('/api/problemlist').map((res)=>res.json());
  }
  service;
  problems:Problem[];
  ngOnInit() {
    this.dataSource.subscribe(
      (data)=>{this.problems=data;
        for(let i=0;i<this.problems.length;i++)
        {
          this.problems[i].id=i+1;
        }});
    if(this.activeProblem)
    {
      this.problems=[this.problems[this.activeProblem-1]]
    }
  }

}
