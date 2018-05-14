import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  date: Date;
  constructor() {}

  ngOnInit() {
    const options = {
      height: 500,
      indicators: false,
      interval: 3000,
      duration: 600
    };
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.slider');
      const instances = M.Slider.init(elems, options);
    });
    this.date = new Date();
  }
}
