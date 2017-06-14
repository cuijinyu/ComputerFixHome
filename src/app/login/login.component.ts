import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from '@angular/router'
import {MessageService} from "../message.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private joinServer:MessageService) { }
  name="2016yiliao";
  password="2016yiliao";
  username;
  userpassword;
  ngOnInit() {
  }
  loginorder(){
    if(this.username==this.name&&this.userpassword==this.password){
      isjoined=true;
      this.router.navigate(['/orderlist']);
    }
  }
  loginproblem(){
    if(this.username==this.name&&this.userpassword==this.password){
    this.router.navigate(['/problemcms']);
    }
  }
}
export var isjoined=false;
