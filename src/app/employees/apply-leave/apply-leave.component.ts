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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDatepickerModule],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.css',
  providers: [provideNativeDateAdapter()],
})
export class ApplyLeaveComponent {
  data = inject<any>(MAT_DIALOG_DATA);
  constructor(public commonService : CommonServiceService){}
  ngOnInit(){
    this.leaveForm.get('empNumber')?.setValue(this.data?.dataSource?.empNumber);
  }
  leaveForm = new FormGroup({
    empNumber: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    duration: new FormControl({value: '', disabled: true}),
    reason: new FormControl(''),
  });
  onSubmit() {
    //converting date to UTC....because in api call its automatically converting to UTC and showing 1 day less
    //begin
    let fromDate = new Date(this.leaveForm.controls['fromDate'].value ? this.leaveForm.controls['fromDate'].value : '');
    this.leaveForm.get('fromDate')?.setValue(new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate(), fromDate.getHours(), fromDate.getMinutes() - fromDate.getTimezoneOffset()).toISOString());
    let toDate = new Date(this.leaveForm.controls['toDate'].value ? this.leaveForm.controls['toDate'].value : '');
    this.leaveForm.get('toDate')?.setValue(new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate(), toDate.getHours(), toDate.getMinutes() - toDate.getTimezoneOffset()).toISOString());
    //end
      // this.commonService.saveEmpAbsenceHistory(this.leaveForm.getRawValue()).then((data: any) => {
        
      // });
  }
  calculateDuration(){
    if(this.leaveForm.controls['fromDate'].value && this.leaveForm.controls['toDate'].value){
      let fromDate: any = this.leaveForm.controls['fromDate'].value;
      let toDate: any = this.leaveForm.controls['toDate'].value;
      this.leaveForm.controls['duration']?.setValue((Math.floor((Date.UTC(toDate.getFullYear(), toDate.getMonth(), toDate.getDate()) - Date.UTC(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate()) ) /(1000 * 60 * 60 * 24)) + 1).toString());// adding +1 as is calculating only diff
    }
  }
}
