import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // loggedInUser = new BehaviorSubject('');
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/';
  apiUrl = 'http://localhost:8080/api/';
  
  async getEmployeeManage(): Promise<any[]> {
    const data = await fetch(this.apiUrl + 'employees/getAllEmployees');
    return (await data.json()) ?? [];
  }
  
//   getEmployeeManage(): Observable<any> {
//   return this.http.get(this.apiUrl + 'employees/getAllEmployees');
// }
  async getManageAbsence(): Promise<any[]> {
    const data = await fetch(this.apiUrl + 'employees/getAllEmployeesAbsence');
    return (await data.json()) ?? [];
  }
  async saveEmployeeDetails(empDetails: any){
    let url = this.apiUrl + 'employees/saveEmployee';
    const headers={headers: new HttpHeaders({'Content-Type': 'application/json'})}
    this.http.post<any>(url, JSON.stringify(empDetails),  headers ).subscribe(data => {
  })
  }
  async saveEmpAbsenceHistory(empAbsenceDetails: any){
    console.log('111 empAbsenceDetails',empAbsenceDetails);
    let url = this.apiUrl + 'employees/saveEmpAbsenceHistory';
    const headers={headers: new HttpHeaders({'Content-Type': 'application/json'})}
    this.http.post<any>(url, JSON.stringify(empAbsenceDetails),  headers ).subscribe(data => {
  })
  }
  async updateEmployeeDetails(empId: any, empDetails: any){
    let url = this.apiUrl + 'employees/updateEmployee/'+ empId.toString();
    const headers={headers: new HttpHeaders({'Content-Type': 'application/json'})}
    this.http.put<any>(url, JSON.stringify(empDetails),  headers ).subscribe(data => {
  })
  }
  async deleteEmployeeDetails(empId: any){
    let url = this.apiUrl + 'employees/deleteEmployee/'+ empId.toString();
    this.http.delete<any>(url).subscribe(data => {
      return data;
  })
  }
  
  async getEmployeeDetailsById(empId: any){
    let url = this.apiUrl + 'employees/getEmployeeById/'+ empId.toString();
    this.http.get<any>(url, empId ).subscribe(data => {
      return data;
  });
}
 getEmpAbsenceHistoryById(empId: any): Observable<any>{
  let url = this.apiUrl + 'employees/getEmpAbsenceHistoryById/'+ empId.toString();
//   this.http.get<any>(url, empId ).subscribe(data => {
//     console.log('111 serv da',data);
//     return data;
// });
  return this.http.get<any>(url, empId);
}
}
