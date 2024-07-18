import { Component, ViewChild, inject } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { employeeManage } from '../models/common-models';
import { CommonServiceService } from '../services/common-service.service';
import { AddEditEmployeeComponent } from '../add-edit-employee/add-edit-employee.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-employee-manage',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './employee-manage.component.html',
  styleUrl: './employee-manage.component.css'
})
export class EmployeeManageComponent {
  displayedColumns: string[] = ['empNumber', 'name', 'role', 'location', 'contactNumber', 'edit', 'delete'];
  dataSource: employeeManage[] = [];
  dialog = inject(MatDialog);
  // @ViewChild(MatTable) table: MatTable<any> | undefined;
  
  constructor(public commonService : CommonServiceService){}
  ngOnInit(){
    this.commonService.getEmployeeManage().then((employeeManage: any[]) => {
      console.log('111 employeeManage',employeeManage);
      this.dataSource = employeeManage;
    });
  }
  
  addData() {
    const dialogRef = this.dialog.open(AddEditEmployeeComponent, {
      data: {dataSource: this.dataSource, isEdit : false},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      // if (result !== undefined) {
      //   // this.animal.set(result);
      // }
    });
  }

  delete(empNumber: any){
    this.commonService.deleteEmployeeDetails(empNumber).then((data: any) => {
      if(data){
        this.ngOnInit();
      }
    });
  }
  edit(empDetails: any){
    const dialogRef = this.dialog.open(AddEditEmployeeComponent, {
      data: {dataSource: empDetails, isEdit : true},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('111 result',result);
      // if (result !== undefined) {
        this.ngOnInit();
      // }
    });
  }
}
