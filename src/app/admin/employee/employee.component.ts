import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  title:any;
  employee:any={};
  employees:any=[];
  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) {

   }

  ngOnInit(): void {
    this.title='Employees';
    this.getEmployees();
  }

  loading:boolean | undefined;
  getEmployees()
  {
    this.loading=true;
    this.api.get('employees').subscribe(result=>{
      this.employees=result;
      this.loading=false;
    },error=>{
      this.loading=false;
    })
  }


    ProductDetail(data: any,idx: number)
    {
      let dialog= this.dialog.open(ProductDetailComponent, {
          width: '400px',
          data: data,
      });
        dialog.afterClosed().subscribe(result=> {
         if(result)
         {
          if(idx==-1)this.employees.push(result);
          else this.employees[idx]=data;
         }
        });
      }


      loadingDelete:any={};
      DeleteEmployee(id: any,idx: any)
      {
        var conf=confirm('Delete item?');
        if(conf)
        this.loadingDelete[idx]=true;
        {
          this.api.delete('employees/'+id).subscribe(result=>{
            this.employees.splice(idx,1);
            this.loadingDelete[idx]=false;
          },error=>{
            this.loadingDelete[idx]=false;
            alert('Tidak dapat menghapus data');
          });
        }
      }
      
    }

