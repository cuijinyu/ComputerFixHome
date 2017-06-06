import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private http:Http) {
    this.http.get("/api/another")
  }

  round=1;
  nextRound()
  {
    this.round++;
  }
  ngOnInit() {
  }

}
