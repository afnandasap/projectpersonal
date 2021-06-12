import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';



const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard' 
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent, 
    ProductDetailComponent,
    DashboardComponent,
    EmployeeComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
}
)
export class AdminModule { }