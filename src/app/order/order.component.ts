import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators, AbstractControl} from "@angular/forms";
import {Headers, RequestOptions} from "@angular/http";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {post} from "selenium-webdriver/http";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  isPost=false;
  postValue=""
  post()
  {
    let body=JSON.stringify({
      code:""
    });
    let headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});
    this.http.post("api/order",this.formModuel.value).toPromise().then((response)=>{
      this.isPost=true;
      this.postValue="您已经成功的提交了您的信息，请耐心等待哦，我们会尽快与您联系的咯~~"
    },()=>{
      this.isPost=true;
      this.postValue="抱歉哦，信息提交失败了，请过段时间再试试哦，或者可以通过我们的qq群联系我们"
    })
  }
  constructor(private http:Http) { }
  phone(control:AbstractControl):{[key:string]:any}{
    return null;
  }
  formModuel:FormGroup;
  ngOnInit() {
    this.formModuel=new FormGroup(
      {
          name:new FormControl("",Validators.required),
          phone:new FormControl("",[Validators.required,Validators.pattern(/^1[3|4|5|8][0-9]\d{4,8}$/)]),
        School:new FormControl("",Validators.required),
        Class:new FormControl("",Validators.required),
        QQ:new FormControl("",[Validators.required,Validators.minLength(5)]),
        Question:new FormControl("",Validators.required)
      });
    this.formModuel.valueChanges.subscribe(data => this.onValueChanged(data));
  }
  ngOnChanges(){
    this.formModuel.valueChanges.subscribe(data => this.onValueChanged(data));
  }
  onSubmit()
  {
    if(this.formModuel.valid)
    {
      console.log(this.formModuel.value)
      this.post();
    }
  }
  //存储错误信息
  formErrors={
    'name':"",
    "phone":"",
    "School":"",
    "Class":"",
    "QQ":"",
    "Question":""
  };
  //给出对应的提示
  validationMessages={
    "name":{
      "required":"请填写您的姓名哦",
    },
    "phone":{
      "required":"请填写您的手机号码",
      "pattern":"请填写正确的手机格式"
    },
    "School":{
      "required":"请选择您的学院"
    },
    "Class":{
      "required":"请选择您的年级"
    },
    "QQ":{
      "required":"请填写您的QQ号码",
      "minlength":"请填写正确长度的QQ号码"
    },
    "Question":{
      "required":"请详细填写您遇到的问题"
    }
  };
  onValueChanged(data){
    console.log(this.formErrors);
    console.log(this.formModuel.errors)
    for(const field in this.formErrors)
    {
      this.formErrors[field]="";
      //取得表单字段
      const control=this.formModuel.get(field);
      //表单字段已经修改或无效
      if(control&&control.dirty&&!control.valid){
        //取出对应字段可能的错误信息
        const messages=this.validationMessages[field];
        for(const key in control.errors)
        {
          this.formErrors[field]+=messages[key]+'';
        }
      }
    }
  }
}
