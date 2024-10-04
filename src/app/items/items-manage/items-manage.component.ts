import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, SimpleChanges, viewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';
import { items } from '../../models/common-models';
import { ItemsService } from '../../services/items.service';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-items-manage',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule,MatSelectModule, 
    MatExpansionModule,ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,CommonModule, 
    DatePipe],
  templateUrl: './items-manage.component.html',
  styleUrl: './items-manage.component.css'
})
export class ItemsManageComponent {
  accordion = viewChild.required(MatAccordion);
  totalItemsDisplayedColumns: string[] = ['date', 'itemName', 'procurementType', 'quantity', 'oneQuantityToKgOrPiece', 'buyingAmountForOneQuantity', 'totalQuantityInKgOrPiece', 'buyingAmountForOneQuantityInKgOrPiece', 'totalBuyingAmount', 'expectedSellingAmount', 'expectedSellingAmountForQuantityInKgOrPiece'];
  totalItemsDataSource: any;
  soldItemsDisplayedColumns: string[] = ['date', 'itemName', 'quantity', 'amount'];
  soldItemsDataSource: items[] = [];
  remainingItemsDisplayedColumns: string[] = ['itemName', 'quantity'];
  remainingItemsDataSource: items[] = [];
  todaysDate = new Date();
  itemsList: any;
  selectedItem: any;
  itemForm: any;
  procurementKindList = [
    {
      procurementId : 1,
      procurementName : 'Grade', 
    },
    {
      procurementId : 2,
      procurementName : 'Sack', 
    },
    {
      procurementId : 3,
      procurementName : 'Others', 
    }
  ];
  constructor(private itemsService : ItemsService, private formBuilder: FormBuilder)
  {}

  ngOnChanges(changes: SimpleChanges): void{
    console.log('on changes');
  }

  ngOnInit(){
    this.itemForm = this.formBuilder.group({
      date: [{value: '', disabled : true}],
      itemName: [{value: '', disabled : false}],
      procurementType: [{value: '', disabled : false}],
      quantity: [{value: '', disabled : false}],
      oneQuantityToKgOrPiece: [{value: '', disabled : false}],
      buyingAmountForOneQuantity: [{value: '', disabled : false}],
      totalQuantityInKgOrPiece: [{value: '', disabled : true}],
      buyingAmountForOneQuantityInKgOrPiece: [{value: '', disabled : true}],
      totalBuyingAmount: [{value: '', disabled : true}],
      expectedSellingAmount: [{value: '', disabled : true}],
      expectedSellingAmountForQuantityInKgOrPiece: [{value: '', disabled : true}],
    });  
    this.itemForm.controls['date'].setValue(new Date());
    this.itemsService.getItemsList().then((itemsList: any[]) => {
      this.itemsList = itemsList;
    });
    // let totalItemsDataSource = [
    //   {
    //     date: '11/09/2024',
    //     itemName: 'tomato',
    //     procurementType: 'grade',
    //     quantity: 10,
    //     oneQuantityToKgOrPiece: 24, 
    //     get totalQuantityInKgOrPiece() {
    //       return this.quantity * this.oneQuantityToKgOrPiece;
    //     },
    //     totalBuyingAmount: 5000,
    //     get buyingAmountForOneQuantity() {
    //       return Math.ceil(this.totalBuyingAmount / this.totalQuantityInKgOrPiece);
    //     },
    //     get expectedSellingAmount() {
    //       return Math.ceil(this.totalBuyingAmount * (150 / 100));
    //     },
    //     get expectedSellingAmountForQuantity() {
    //       return Math.ceil(this.buyingAmountForOneQuantity * (150 / 100));
    //     }
    //   },
    //   {
    //     date: '12/09/2024',
    //     itemName: 'potato',
    //     procurementType: 'sack',
    //     quantity: 10,
    //     oneQuantityToKgOrPiece: 20, 
    //     get totalQuantityInKgOrPiece() {
    //       return this.quantity * this.oneQuantityToKgOrPiece;
    //     },
    //     totalBuyingAmount: 6000,
    //     get buyingAmountForOneQuantity() {
    //       return Math.ceil(this.totalBuyingAmount / this.totalQuantityInKgOrPiece);
    //     },
    //     get expectedSellingAmount() {
    //       return Math.ceil(this.totalBuyingAmount * (150 / 100));
    //     },
    //     get expectedSellingAmountForQuantity() {
    //       return Math.ceil(this.buyingAmountForOneQuantity * (150 / 100));
    //     }
    //   },
    //   {
    //     date: '13/09/2024',
    //     itemName: 'cauliflower',
    //     procurementType: 'sack',
    //     quantity: 20,
    //     oneQuantityToKgOrPiece: 20, 
    //     get totalQuantityInKgOrPiece() {
    //       return this.quantity * this.oneQuantityToKgOrPiece;
    //     },
    //     totalBuyingAmount: 8000,
    //     get buyingAmountForOneQuantity() {
    //       return Math.ceil(this.totalBuyingAmount / this.totalQuantityInKgOrPiece);
    //     },
    //     get expectedSellingAmount() {
    //       return Math.ceil(this.totalBuyingAmount * (150 / 100));
    //     },
    //     get expectedSellingAmountForQuantity() {
    //       return Math.ceil(this.buyingAmountForOneQuantity * (150 / 100));
    //     }
    //   }
    // ];
    // this.totalItemsDataSource = new MatTableDataSource(totalItemsDataSource);
  }
  
  submitItem(){

  }

  itemFormChanged(form: any){
    console.log('itemFormChanged');
  this.itemForm.get("quantity").valueChanges.subscribe(() => {
    if(this.itemForm.get("oneQuantityToKgOrPiece").value){
      let totalQuantityInKgOrPiece = Math.ceil(this.itemForm.get("quantity").value * this.itemForm.get("oneQuantityToKgOrPiece").value);
      this.itemForm.controls['totalQuantityInKgOrPiece'].setValue(totalQuantityInKgOrPiece);
    }  
  });
  this.itemForm.get("oneQuantityToKgOrPiece").valueChanges.subscribe(() => {
    if(this.itemForm.get("quantity").value){
      let totalQuantityInKgOrPiece = Math.ceil(this.itemForm.get("quantity").value * this.itemForm.get("oneQuantityToKgOrPiece").value);
      this.itemForm.controls['totalQuantityInKgOrPiece'].setValue(totalQuantityInKgOrPiece);
    }          
  });
  this.itemForm.get("buyingAmountForOneQuantity").valueChanges.subscribe(() => {
    if(this.itemForm.get("quantity").value && this.itemForm.get("oneQuantityToKgOrPiece").value){
      let totalBuyingAmount = Math.ceil(this.itemForm.get("quantity").value * this.itemForm.get("buyingAmountForOneQuantity").value);
      let buyingAmountForOneQuantityInKgOrPiece = Math.ceil(totalBuyingAmount / this.itemForm.get("totalQuantityInKgOrPiece").value);
      let expectedSellingAmount = Math.ceil(totalBuyingAmount * (140/100));
      let  expectedSellingAmountForQuantityInKgOrPiece = Math.ceil(buyingAmountForOneQuantityInKgOrPiece * (140/100));

      this.itemForm.controls['totalBuyingAmount'].setValue(totalBuyingAmount);
      this.itemForm.controls['buyingAmountForOneQuantityInKgOrPiece'].setValue(buyingAmountForOneQuantityInKgOrPiece);
      this.itemForm.controls['expectedSellingAmount'].setValue(expectedSellingAmount);
      this.itemForm.controls['expectedSellingAmountForQuantityInKgOrPiece'].setValue(expectedSellingAmountForQuantityInKgOrPiece);
    }   
  });
  }
  applyFilterTotalItems(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.totalItemsDataSource.filter = filterValue.trim().toLowerCase();
  }
}
