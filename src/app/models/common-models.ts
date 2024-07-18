export interface employeeManage {
    empNumber: string;
    name: string;
    role: string;
    location: string;
    contactNumber: number;
  }
  
  export interface manageAbsence {
    empNumber: string;
    name: string;
    role: string;
    location: string;
    leaveBalance: number;
  }
  
  export interface complaintStatus {
    complaintNumber: string;
    complaintMode: string;
    enquiringPerson: string;
    location: string;
    complaintStatus: string;
  }
