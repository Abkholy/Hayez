import { Component, OnInit } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';

import * as $ from 'jquery';
import { EventEmitter } from 'events';
import { Dropdown } from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // template: ``,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public drop = true;

  constructor() {}

  public ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.dropdown-trigger');
      const instances = M.Dropdown.init(elems);
    });
  }
}
