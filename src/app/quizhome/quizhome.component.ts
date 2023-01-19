import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizhome',
  templateUrl: './quizhome.component.html',
  styleUrls: ['./quizhome.component.css']
})
export class QuizhomeComponent implements OnInit {

  name = "Bolutife";
  time = 60;
  
  constructor() { }

  ngOnInit(): void {
  }

}
