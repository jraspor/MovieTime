import { Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flag = false;

  setFlag(event) {
    this.flag = event;
    console.log(this.flag);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
