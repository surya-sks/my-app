import { Component, ViewChild } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { complaintStatus } from '../models/common-models';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-complaint-status',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './complaint-status.component.html',
  styleUrl: './complaint-status.component.css'
})
export class ComplaintStatusComponent {
  displayedColumns: string[] = ['complaintNumber', 'complaintMode', 'enquiringPerson', 'location', 'complaintStatus'];
  dataSource: complaintStatus[] = [];

  @ViewChild(MatTable) table: MatTable<any> | undefined;
  
  constructor(public commonService : CommonServiceService){}
  ngOnInit(){
    // this.commonService.getComplaintStatus().then((complaintStatus: any[]) => {
    //   this.dataSource = complaintStatus;
    // });
  }
  addData() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // this.table.renderRows();
  }

  removeData() {
    // this.dataSource.pop();
    // this.table.renderRows();
  }

}
