import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { CommonModule, DatePipe } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ItemsService } from '../../services/items.service';
import { cloneDeep } from 'lodash';
import { PdfGeneratorComponent } from "../../common-components/pdf-generator/pdf-generator.component";
import { BillingService } from '../../services/billing.service';

@Component({
  selector: 'app-bill-generate',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe, MatButtonModule, MatSelectModule,
    ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, PdfGeneratorComponent],
  templateUrl: './bill-generate.component.html',
  styleUrl: './bill-generate.component.css'
})
export class BillGenerateComponent {
  displayedColumns: string[] = ['sNo','itemName', 'unitPrice', 'qty', 'cost'];
  itemForm: any;
  itemsList: any;
  transactions: any[] = [];
  pdfData: any[] = [];
  pdfHeaders: string[] = ['S.NO','Item Name', 'Unit Price in INR', 'Quantity', 'Cost in INR'];
  //below formatter -> How to get numbers to Indian rupees format in web page like 10,000.00
  // formatter = new Intl.NumberFormat('en-IN', {
  //   style: 'currency',
  //   currency: 'INR',
  //   minimumFractionDigits: 2,
  // });

  constructor(private formBuilder: FormBuilder, private itemsService : ItemsService,
    private billingService : BillingService
  ){}
  
  ngOnInit(){
    this.itemForm = this.formBuilder.group({
      itemName: [{value: '', disabled : false}],
      unitPrice: [{value: '', disabled : false}],
      qty: [{value: '', disabled : false}],
      cost: [{value: '', disabled : true}],
    }); 
    this.itemsService.getItemsList().then((itemsList: any[]) => {
      this.itemsList = itemsList;
    });
  }
  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => Number(acc) + Number(value), 0);
  }
  addData(){
    let eachTransData:any = [];
    let trans = cloneDeep(this.transactions);
    trans.push(this.itemForm.getRawValue());
    this.transactions = trans;
    /////////////////pdf related contents begins here///////////////////
    let pdfTrans = cloneDeep(this.transactions);
    this.pdfData = [];
    let i = 0;
    let Qty = 0;
    for (const value of Object.values(pdfTrans)) {
      eachTransData = [];
      const entries = Object.entries(value);
      const lastKey = entries[entries.length - 1][0];
      i++;
      eachTransData.push(i);
      for (let v in value) {
        // if(v == 'unitPrice' || v=='cost'){
        //   value[v] = this.formatter.format(value[v]);
        // }
        if(v == 'qty'){
          Qty += Number(value[v]);
        }
        eachTransData.push(value[v]);
        if(v == lastKey){
           this.pdfData.push(eachTransData);
           if(pdfTrans[pdfTrans.length - 1] == value){
            let totalCost = ['Total Cost','','','',this.getTotalCost()]
            this.pdfData.push(totalCost);
            let totalQty = ['Total Qty','','',Qty,'']
            this.pdfData.push(totalQty);
            let totalItems = ['Total Items',pdfTrans.length,'','','']
            this.pdfData.push(totalItems);
           }
        }
      }
    }
    /////////////////pdf related contents ends here///////////////////
    this.getTotalCost();
    this.itemForm.reset();
  }

  saveBill(){
    //hardcoded begin
    let bill ={
      customerId : 1,
      totalAmount: this.getTotalCost(),
      date: new Date(),
      paymentMethod: 'Cash',
      status: 'Paid'
    };
    let billLineItemsArray = [];
    let billLineItems ={
      billId : 1,
      productId: 1,
      quantity: 1,
      unitPrice: 12,
      totalPrice: 23
    };
    //hardcoded begin
    billLineItemsArray.push(billLineItems);
    this.billingService.saveBill(bill).subscribe({
      next: (billId => {
        this.billingService.saveBillLineItems(billLineItemsArray).subscribe({
          next: (billLineItem => {
           //
          }),
          error: (err => {
    // 
          })
        }); 
      }),
      error: (err => {
    // 
      })
    });     
  }

  itemFormChanged(form: any){
    this.itemForm.get("unitPrice").valueChanges.subscribe(() => {
      if(this.itemForm.get("qty").value){
        let cost = Math.ceil(this.itemForm.get("qty").value * this.itemForm.get("unitPrice").value);
        this.itemForm.controls['cost'].setValue(cost);
      }  
    });
    this.itemForm.get("qty").valueChanges.subscribe(() => {
      if(this.itemForm.get("unitPrice").value){
        let cost = Math.ceil(this.itemForm.get("qty").value * this.itemForm.get("unitPrice").value);
        this.itemForm.controls['cost'].setValue(cost);
      }          
    });
  }
}
