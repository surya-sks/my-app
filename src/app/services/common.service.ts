import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  loggedInUser = new BehaviorSubject('');
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/';
  apiUrl = 'http://localhost:8080/api/';
  
  billingNavList = [
    {
    name: 'Billing',
    url: '/billing'
  },
    {
    name: 'Generate Bill',
    url: '/bill-generate'
  }
]
empolyeeNavList = [
  {
   name: 'Employee',
   url: '/employee'
  },
  {
    name: 'Employee Manage',
    url: '/employee-manage'
   },
  {
   name: 'Employee Absence Management',
   url: '/employee-absence-manage'
  },
   {
    name: 'Employee Tasks',
    url: '/employee-tasks'
   },
]

itemsNavList = [
  {
   name: 'Items Manage',
   url: '/items-manage'
  },
  {
   name: 'Items Price List',
   url: '/items-price-list'
  }
]
adminNavList = [
  {
    name: 'Users',
    url: '/admin-users'
  }
];

  private sideNavList:Subject<any> = new BehaviorSubject<any>([]);

  get sideNavList$(){
    return this.sideNavList.asObservable();
  }

  addSideNavList(url:any) {
    if(url.toString().includes('employee')){
      this.sideNavList.next(this.empolyeeNavList);
    }
    else if(url.toString().includes('items')){
      this.sideNavList.next(this.itemsNavList);
    }
    else if(url.toString().includes('bill')){
      this.sideNavList.next(this.billingNavList);
    }
    else if(url.toString().includes('admin')){
      this.sideNavList.next(this.adminNavList);
    }
    else{
      this.sideNavList.next([]);
    }
  }
  
  // async getAllHousingLocations(): Promise<any[]> {
  //   const data = await fetch(this.url + 'locations');
  //   return (await data.json()) ?? [];
  // }
  // async getHousingLocationById(id: number): Promise<any | undefined> {
  //   const data = await fetch(`${this.url}/${id}`);
  //   return (await data.json()) ?? {};
  // }
  // async getComplaintStatus(): Promise<any[]> {
  //   const data = await fetch(this.url + 'complaintStatus');
  //   return (await data.json()) ?? [];
  // }
  // async getEmployeeManage(): Promise<any[]> {
  //   const data = await fetch(this.apiUrl + 'employees/getAllEmployees');
  //   return (await data.json()) ?? [];
  // }
  
//   getEmployeeManage(): Observable<any> {
//   return this.http.get(this.apiUrl + 'employees/getAllEmployees');
// }
//   async getManageAbsence(): Promise<any[]> {
//     const data = await fetch(this.apiUrl + 'employees/getAllEmployeesAbsence');
//     return (await data.json()) ?? [];
//   }
//   async saveEmployeeDetails(empDetails: any){
//     let url = this.apiUrl + 'employees/saveEmployee';
//     const headers={headers: new HttpHeaders({'Content-Type': 'application/json'})}
//     this.http.post<any>(url, JSON.stringify(empDetails),  headers ).subscribe(data => {
//   })
//   }
//   async saveEmpAbsenceHistory(empAbsenceDetails: any){
//     console.log('111 empAbsenceDetails',empAbsenceDetails);
//     let url = this.apiUrl + 'employees/saveEmpAbsenceHistory';
//     const headers={headers: new HttpHeaders({'Content-Type': 'application/json'})}
//     this.http.post<any>(url, JSON.stringify(empAbsenceDetails),  headers ).subscribe(data => {
//   })
//   }
//   async updateEmployeeDetails(empId: any, empDetails: any){
//     let url = this.apiUrl + 'employees/updateEmployee/'+ empId.toString();
//     const headers={headers: new HttpHeaders({'Content-Type': 'application/json'})}
//     this.http.put<any>(url, JSON.stringify(empDetails),  headers ).subscribe(data => {
//   })
//   }
//   async deleteEmployeeDetails(empId: any){
//     let url = this.apiUrl + 'employees/deleteEmployee/'+ empId.toString();
//     this.http.delete<any>(url).subscribe(data => {
//       return data;
//   })
//   }
  
//   async getEmployeeDetailsById(empId: any){
//     let url = this.apiUrl + 'employees/getEmployeeById/'+ empId.toString();
//     this.http.get<any>(url, empId ).subscribe(data => {
//       return data;
//   });
// }
//  getEmpAbsenceHistoryById(empId: any): Observable<any>{
//   let url = this.apiUrl + 'employees/getEmpAbsenceHistoryById/'+ empId.toString();
// //   this.http.get<any>(url, empId ).subscribe(data => {
// //     console.log('111 serv da',data);
// //     return data;
// // });
//   return this.http.get<any>(url, empId);
// }
}

