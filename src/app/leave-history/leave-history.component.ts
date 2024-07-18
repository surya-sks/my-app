import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-leave-history',
  standalone: true,
  imports: [ MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatTableModule],
  templateUrl: './leave-history.component.html',
  styleUrl: './leave-history.component.css'
})
export class LeaveHistoryComponent {
  data = inject<any>(MAT_DIALOG_DATA);
  displayedColumns: string[] = ['fromDate', 'toDate', 'duration', 'reason'];
  dataSource: any = [];

  ngOnInit(){
    this.dataSource = this.data?.dataSource;
    //converting UTCtime format to date....because in api call its automatically converting to UTC and showing 1 day less
    //begin
    this.dataSource.forEach((element: { fromDate: string | number | Date; toDate: string | number | Date; })=> {
    let fromDate = new Date(element?.fromDate);
    // let day = fromDate.getUTCDate();
    // let month = fromDate.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
    // let year = fromDate.getUTCFullYear();
    // let formattedFromDate = `${month}/${day}/${year}`;
    let formattedFromDate = fromDate.toLocaleDateString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
  });
    let toDate = new Date(element?.toDate);
    // let dd = toDate.getUTCDate();
    // let mm = toDate.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
    // let yy = toDate.getUTCFullYear();
    // let formattedToDate = `${mm}/${dd}/${yy}`;
    let formattedToDate = toDate.toLocaleDateString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
  });
    element.fromDate = formattedFromDate;
    element.toDate = formattedToDate;
    });
    // end
  }
}
