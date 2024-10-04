import { Component, inject, ViewChild } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { manageAbsence } from '../../models/common-models';
import { CommonServiceService } from '../../services/common.service';
import { MatIconModule } from '@angular/material/icon';
import { LeaveHistoryComponent } from '../leave-history/leave-history.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';

@Component({
  selector: 'app-manage-absence',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './manage-absence.component.html',
  styleUrl: './manage-absence.component.css'
})
export class ManageAbsenceComponent {
  displayedColumns: string[] = ['empNumber', 'name', 'leaveBalance', 'leaveHistory', 'applyLeave'];
  dataSource: manageAbsence[] = [];
  dialog = inject(MatDialog);
  // @ViewChild(MatTable) table: MatTable<any> | undefined;
  constructor(public commonService : CommonServiceService){}
  ngOnInit(){
    // this.commonService.getManageAbsence().then((manageAbsence: any[]) => {
    //   this.dataSource = manageAbsence;
    // });
  }
  applyLeave(emp: any){
    const dialogRef = this.dialog.open(ApplyLeaveComponent, {
      data: {dataSource: emp},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  viewLeaveHistory(emp: any){
    // this.commonService.getEmpAbsenceHistoryById(emp?.empNumber).subscribe((data: any) => {
    //   const dialogRef = this.dialog.open(LeaveHistoryComponent, {
    //     data: {dataSource: data},
    //   });
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     this.ngOnInit();
    //   });
    // });
   
  }
}
