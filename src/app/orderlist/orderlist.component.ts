import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  dataSource:Observable<any>;
  OrderList:Array<any>=[];
  constructor(private http:Http) {
    this.dataSource=this.http.get('/api/orderlist').map((res)=>res.json());
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data)=>this.OrderList=data
    )}

}
