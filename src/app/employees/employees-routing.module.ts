import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent
  }, {
    path: 'edit/:id',
    component: EmployeeDetailComponent,
    data: { role: 'admin' } // basic role guard
  }, {
    path: 'add',
    component: EmployeeDetailComponent,
    data: { role: 'admin' }
  },
  {
    path: 'show/:id',
    component: EmployeeDetailComponent,
    data: { readonly: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
