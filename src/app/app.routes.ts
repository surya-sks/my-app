import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeManageComponent } from './employees/employee-manage/employee-manage.component';
import { ManageAbsenceComponent } from './employees/manage-absence/manage-absence.component';
import { TasksComponent } from './employees/tasks/tasks.component';
import { ComplaintStatusComponent } from './complaint-status/complaint-status.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { TimerComponent } from './timer/timer.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { RevenueComponent } from './revenue/revenue.component';
import { BillingComponent } from './bill/billing/billing.component';
import { BillGenerateComponent } from './bill/bill-generate/bill-generate.component';
import { ItemsManageComponent } from './items/items-manage/items-manage.component';
import { ItemsPriceListComponent } from './items/items-price-list/items-price-list.component';
import { ItemsHomeComponent } from './items/items-home/items-home.component';
import { UsersComponent } from './admin/users/users.component';

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
        path: 'items-manage',
        component: ItemsManageComponent,
        title: 'Items Manage',
      },
      {
        path: 'items-price-list',
        component: ItemsPriceListComponent,
        title: 'Items Price List',
      },
      {
        path: 'items-home',
        component: ItemsHomeComponent,
        title: 'Items Home Page',
      },
      {
        path: 'employee',
        component: EmployeeDetailsComponent,
        title: 'Employee',
      },
      {
        path: 'employee-absence-manage',
        component: ManageAbsenceComponent,
        title: 'Employee Absence Management',
      },
      {
        path: 'employee-manage',
        component: EmployeeManageComponent,
        title: 'Employee Manage',
      },
      {
        path: 'employee-tasks',
        component: TasksComponent,
        title: 'Employee Tasks',
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
      },
      {
        path: 'billing',
        component: BillingComponent,
        title: 'Billing',
      },
      {
        path: 'revenue',
        component: RevenueComponent,
        title: 'Revenue',
      },
      {
        path: 'bill-generate',
        component: BillGenerateComponent,
        title: 'Bill Generate',
      },
      {
        path: 'admin-users',
        component: UsersComponent,
        title: 'User',
      }
];
