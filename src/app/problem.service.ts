import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class ProblemService {
  Problems;
  dataSource:Observable<any>;
  //ProblemList:Array<any>=[];
  constructor(private http:Http) {
    this.dataSource=this.http.get('/api/problemlist').map((res)=>res.json());
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data)=>this.Problems=data
    )}
  getProblems()
  {
    return this.Problems;
  }
}
