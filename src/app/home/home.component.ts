import { Component, HostListener, Input, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CommonServiceService } from '../services/common-service.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,RouterModule, MatCardModule,
           MatGridListModule, MatDividerModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: any;
  context:any;
  isDrawing = false;
  img:any;
  constructor(public commonService : CommonServiceService){}
  ngOnInit(){
    // this.commonService.getAllHousingLocations().then((housingLocationList: any[]) => {
    //   console.log('111 housingLocationList',housingLocationList);
    // });
  }
  tiles: any[] = [
    {text: 'Employee Manage', cols: 1, rows: 1, routerLink: '/employeeManage', icon: 'task'},
    {text: 'Manage Absence', cols: 1, rows: 1, routerLink: '/managaeAbsence', icon: 'task'},
    {text: 'Tasks', cols: 1, rows: 1, routerLink: '/tasks', icon: 'task',isDivider: true},
    {text: 'Total Items', cols: 1, rows: 1, routerLink: '/', icon: 'task'},
    {text: 'Items Sold', cols: 1, rows: 1, routerLink: '/', icon: 'task'},
    {text: 'Ramaining Items', cols: 1, rows: 1, routerLink: '/', icon: 'task'},
    {text: 'Complaints Status', cols: 1, rows: 1, routerLink: '/complaintStatus', icon: 'task'},
    {text: 'NA', cols: 1, rows: 1, routerLink: '/', icon: 'task'},
    {text: 'NA', cols: 1, rows: 1, routerLink: '/', icon: 'task',isDivider: true},
    {text: 'NA', cols: 1, rows: 1, routerLink: '/', icon: 'task'},
    {text: 'NA', cols: 1, rows: 1, routerLink: '/', icon: 'task'},
    {text: 'NA', cols: 1, rows: 1, routerLink: '/', icon: 'task'} 
  ];

homeContent: any[] = [
  {header: '', content:'', cols: 1, rows: 1 , isImage:true},
  {header: 'MS', 
    content:'MS serves as a centralized platform that allows organizations to efficiently oversee and control various aspects of their operations. MS portal serves as a vital tool for organizations to streamline operations, enhance productivity, foster collaboration, and make informed decisions based on real-time data and analytics. Its comprehensive features empower managers to effectively lead their teams and achieve strategic objectives.', cols: 3, rows: 1, isImage:false },
];



@HostListener('document:mouseup', ['$event'])
onMouseUp(e:any) {
  this.isDrawing = false;
}

onMouseDown(e:any) {
  this.isDrawing = true;
  const coords = this.relativeCoords(e);
  this.context.moveTo(coords.x, coords.y);
}

onMouseMove(e:any) {
  if (this.isDrawing) {
    const coords = this.relativeCoords(e);
    this.context.lineTo(coords.x, coords.y);
    this.context.stroke();
  }
}

private relativeCoords(event:any) {
  const bounds = event.target.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  return { x: x, y: y };
}

// clear() {
//   this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
//   this.context.beginPath();
// }

// save() {
//   this.img = this.sigPadElement.toDataURL("image/png");
//   console.log(this.img);
// }


}
