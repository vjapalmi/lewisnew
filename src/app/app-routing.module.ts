
//import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';

//const routes: Routes = [];

//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
//})
//export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NotFoundComponent } from './not-found.component';
import { hometreeComponent } from './hometree/hometree.component';

//import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
  { path: 'components', component: hometreeComponent },
    // { path: 'template', component: DropdownTreeviewSelectDemoComponent },
  //{ path: 'advanced', component: ProductComponent },
  //{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
