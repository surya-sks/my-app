import { Component, ViewChild, inject } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { employeeManage } from '../../models/common-models';
import { CommonServiceService } from '../../services/common.service';
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
import { AddEditEmployeeComponent } from '../add-edit-employee/add-edit-employee.component';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-manage',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './employee-manage.component.html',
  styleUrl: './employee-manage.component.css'
})
export class EmployeeManageComponent {
  displayedColumns: string[] = ['empNumber', 'name', 'role','designation', 'location', 'contactNumber', 'edit', 'delete'];
  dataSource: employeeManage[] = [];
  dialog = inject(MatDialog);
  // @ViewChild(MatTable) table: MatTable<any> | undefined;
  
  constructor(private employeeService : EmployeeService)
  {}
  ngOnInit(){
    this.employeeService.getEmployeeManage().then((employeeManage: any[]) => {
      this.dataSource = employeeManage;
    });
  }
  
  addData() {
    const dialogRef = this.dialog.open(AddEditEmployeeComponent, {
      data: {dataSource: this.dataSource, isEdit : false},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  delete(empNumber: any){
    this.employeeService.deleteEmployeeDetails(empNumber).then((data: any) => {
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
        this.ngOnInit();
    });
  }
}
