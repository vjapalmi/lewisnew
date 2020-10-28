//import { Component, OnInit } from '@angular/core';
//
//@Component({
 // selector: 'app-hometree',
  //templateUrl: './hometree.component.html',
  //styleUrls: ['./hometree.component.css']
//})
//export class HometreeComponent implements OnInit {

//  constructor() { }

  //ngOnInit(): void {
  //}

//}

import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { hometreeservice } from './hometree.service';

@Component({
  selector: 'ngx-hometree',
  templateUrl: './hometree.component.html',
  providers: [
    hometreeservice
  ]
})
export class hometreeComponent implements OnInit {
  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  constructor(
    private service: hometreeservice
  ) { }

  ngOnInit(): void {
    this.items = this.service.getBooks();
  }

  onFilterChange(value: string): void {
    console.log('filter:', value);
  }
}
