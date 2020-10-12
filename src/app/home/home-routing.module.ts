import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import{EmployeeListComponent}from './employee-list/employee-list.component'
import { HomeComponent } from './home.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
 { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },

]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }