import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flag= false;

  setFlag() {
    this.flag = true;
    console.log(this.flag);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
