import { Component, OnInit } from '@angular/core';
import {ProblemService} from "../problem.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {FormControl, FormGroup, FormArray, Validators, AbstractControl} from "@angular/forms";
import {Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-problemcms',
  templateUrl: './problemcms.component.html',
  styleUrls: ['./problemcms.component.css'],
  providers:[ProblemService]
})
export class ProblemcmsComponent implements OnInit {
  constructor(private http:Http) {
    this.dataSource=this.http.get('/api/problemlist').map((res)=>res.json());
  }
  problems;

  dataSource:Observable<any>;
  //ProblemList:Array<any>=[];
  formModuel:FormGroup;
  ngOnInit() {
    this.dataSource.subscribe(
      (data)=>{this.problems=data;
        for(let i=0;i<this.problems.length;i++)
        {
          this.problems[i].id=i+1;
        }});
    this.formModuel=new FormGroup(
      {
        problemname:new FormControl("",Validators.required),
        solveway:new FormControl("",Validators.required),
      });
  }
  ngOnChanges()
  {
    this.dataSource.subscribe(
      (data)=>{this.problems=data;
        for(let i=0;i<this.problems.length;i++)
        {
          this.problems[i].id=i+1;
        }});
    this.formModuel=new FormGroup(
      {
        problemname:new FormControl("",Validators.required),
        solveway:new FormControl("",Validators.required),
      });
  }
  submit()
  {
    this.http.post("api/problem",this.formModuel.value).toPromise().then();
  }
  URL;
 delete(i)
  {
    this.URL=`api/problem/${i.problemname}`;
    this.http.delete(this.URL).subscribe(
      data=>{console.log(data)},
      err=>{console.log(err)},
    ()=>{console.log("Success")})
  }
}
