import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  userData:any={};
  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public api:ApiService,
  ) { }

  ngOnInit(): void {
  }
  
  loading:boolean | undefined
  saveData()
  {
    this.loading=true;
    if(this.data.id == undefined)
    {
      this.api.post('employees',this.data).subscribe(result=>{
        this.dialogRef.close(result);
        this.loading=false;
      },error=>{
        this.loading=false;
        alert('Tidak dapat menyimpan data');
      });
    }else{
      this.api.put('employees/'+this.data.id,this.data).subscribe(result=>{
        this.dialogRef.close(result);
        this.loading=false;
      },error=>{
        this.loading=false;
        alert('Tidak dapat memperbarui data');
      });
    }
  }
  
}
