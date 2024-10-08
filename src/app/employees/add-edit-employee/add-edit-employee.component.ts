import { Component, inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonServiceService } from '../../services/common.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './add-edit-employee.component.html',
  styleUrl: './add-edit-employee.component.css'
})
export class AddEditEmployeeComponent {
  data = inject<any>(MAT_DIALOG_DATA);
  constructor(private employeeService : EmployeeService){}
  ngOnInit(){
    if(this.data?.isEdit){
       this.employeeForm?.get('name')?.setValue(this.data?.dataSource?.name);
       this.employeeForm?.get('role')?.setValue(this.data?.dataSource?.role);
       this.employeeForm?.get('designation')?.setValue(this.data?.dataSource?.designation);
       this.employeeForm?.get('password')?.setValue(this.data?.dataSource?.password);
       this.employeeForm?.get('location')?.setValue(this.data?.dataSource?.location);
       this.employeeForm?.get('contactNumber')?.setValue(this.data?.dataSource?.contactNumber);
    }
  }
  employeeForm = new FormGroup({
    name: new FormControl(''),
    role: new FormControl(''),
    designation: new FormControl(''),
    password: new FormControl(''),
    location: new FormControl(''),
    contactNumber: new FormControl(''),
  });
  onSubmit() {
    if(this.data?.isEdit){
     this.employeeService.updateEmployeeDetails(this.data?.dataSource?.empNumber, this.employeeForm.value).then((data: any) => {
    });
    }
    else{
      this.employeeService.saveEmployeeDetails(this.employeeForm.value).then((data: any) => {
      });
    }
  }
}
