import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

export class hometreeservice {
  getBooks(): TreeviewItem[] {
    const childrenCategory = new TreeviewItem({
      text: 'MY Estimates ', value: 1, collapsed: true, children: [
        { text: '2019 Last Quarter Estimate ', value: 11 },
        { text: '2019 - Quarter2 Estimate ', value: 12 },
        { text: '2020 1 st Quarter Estimate', value: 13 }
      ]
    });
    const itCategory = new TreeviewItem({
      text: 'Shared Estimates', value: 9, children: [
        {
          text: 'Utah', value: 91, children: [{
            text: 'Metropolitan Statistical Area (2005-17)', value: 911, children: [
              { text: 'Salt Lake City, UT', value: 9111 },
              { text: 'Provo-Orem, UT', value: 9112 },
              { text: 'Ogden, UT', value: 9112 },
              { text: 'Logan, UT', value: 9112 },
              { text: 'St. George, UT', value: 9112 },
              // { text: 'ReactJS', value: 9113, disabled: true }
            ]
          }, {
            text: 'Balance of State', value: 912, children: [
              { text: 'Central Utah nonmetropolitan area', value: 9121 },
              { text: 'South Utah nonmetropolitan area', value: 9122 },
              // { text: 'Python', value: 9123, checked: false, disabled: true }
            ]
          }]
        },
        {
          text: 'Minnesota', value: 92, children: [
            { text: 'Metropolitan-Twin Cities', value: 921 },
            { text: 'Metropolitan-Rochester', value: 922 }
          ]
        }
      ]
    });
    
    return [childrenCategory, itCategory,];
  }
}
