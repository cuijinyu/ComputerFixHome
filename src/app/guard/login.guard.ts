/**
 * Created by 崔晋瑜 on 2017/5/21.
 */
import {CanActivate} from '@angular/router';
import {MessageService} from "../message.service";
import {JoinComponent} from "../join/join.component";
import {Component} from "@angular/core";
import {isjoined} from "../login/login.component";
/*@Component({
  providers:[MessageService]
})*/
export class LoginGuard implements CanActivate{
  isjoined=isjoined;
  constructor(/*private JoinService:MessageService*/){}
  canActivate(){
    /*if(/*this.JoinService.joined==true)*/
      return true;
  }
}
