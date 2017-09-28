import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../page-layouts/default-layout/default-layout.component';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

const routes: Routes = [
	{
		path: '', component: DefaultLayoutComponent, children: [
			{ path: 'home', component: HomeComponent },
		]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
