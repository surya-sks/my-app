export interface employeeManage {
    empNumber: string;
    name: string;
    role: string;
    designation: string;
    password?: string;
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

  export interface items {
    date?: Date;
    itemName?: string;
    quantityName?: String;
    quantity?: number;
    quantityToKgOrPiece?: number, 
    buyingAmountForQuantity?: number,
    totalQuantityInKgOrPiece?: number, 
    buyingAmountForQuantityInKgOrPiece?: number,
    totalBuyingAmount?: number,
    expectedSellingAmount?: number, 
    expectedSellingAmountForQuantityInKgOrPiece?: number
  }