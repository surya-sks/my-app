import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import { EmployeeManageComponent } from "../employee-manage/employee-manage.component";
import { ManageAbsenceComponent } from "../manage-absence/manage-absence.component";
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: 'app-employee-details',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule, 
    EmployeeManageComponent, ManageAbsenceComponent, TasksComponent],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  accordion = viewChild.required(MatAccordion);
  submitTask(){

  }
}
