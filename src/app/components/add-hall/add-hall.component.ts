import { HallsService } from './../../services/halls.service';
import { Component, OnInit } from '@angular/core';
import { Halls } from '../../interfaces/halls';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrls: ['./add-hall.component.css']
})
export class AddHallComponent implements OnInit {
  selectednumber;

  hallls: Halls = {
    hallName: '',
    noOfChais: 1,
    branch: '',
    id: ''
  };
  constructor(private hallsservice: HallsService) {}

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.tooltipped');
      const instances = M.Tooltip.init(elems);
    });
    this.text(1);
  }
  text(event) {
    this.selectednumber = event;
  }
  addhall() {
    this.hallsservice.addHall(this.hallls);
  }
}
