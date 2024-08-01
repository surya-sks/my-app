import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { ManageAbsenceComponent } from './manage-absence/manage-absence.component';
import { TasksComponent } from './tasks/tasks.component';
import { ComplaintStatusComponent } from './complaint-status/complaint-status.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TimerComponent } from './timer/timer.component';
import { ConceptsComponent } from './concepts/concepts.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home page',
      },
      {
        path: 'employeeManage',
        component: EmployeeManageComponent,
        title: 'Employee Manage',
      },
      {
        path: 'managaeAbsence',
        component: ManageAbsenceComponent,
        title: 'Manage Absence',
      },
      {
        path: 'tasks',
        component: TasksComponent,
        title: 'Tasks',
      },
      {
        path: 'complaintStatus',
        component: ComplaintStatusComponent,
        title: 'Complaint Status',
      },
      {
        path: 'items',
        component: ItemsComponent,
        title: 'Items',
      },
      {
        path: 'employee',
        component: EmployeeDetailsComponent,
        title: 'Employee',
      },
      {
        path: 'concepts',
        component: ConceptsComponent,
        title: 'Concepts',
      },
      {
        path: 'timer',
        component: TimerComponent,
        title: 'Timer',
      }
];
