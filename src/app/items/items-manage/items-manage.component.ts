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
  totalItemsDisplayedColumns: string[] = ['date', 'itemName', 'procurementType', 'qty', 'oneQtyToKgOrPiece', 'buyingAmountForOneQty', 'totalQtyInKgOrPiece', 'buyingAmountForOneQtyInKgOrPiece', 'totalBuyingAmount', 'expectedSellingAmount', 'expectedSellingAmountForQtyInKgOrPiece'];
  totalItemsDataSource: any;
  soldItemsDisplayedColumns: string[] = ['date', 'itemName', 'qty', 'amount'];
  soldItemsDataSource: items[] = [];
  remainingItemsDisplayedColumns: string[] = ['itemName', 'qty'];
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
      qty: [{value: '', disabled : false}],
      oneQtyToKgOrPiece: [{value: '', disabled : false}],
      buyingAmountForOneQty: [{value: '', disabled : false}],
      totalQtyInKgOrPiece: [{value: '', disabled : true}],
      buyingAmountForOneQtyInKgOrPiece: [{value: '', disabled : true}],
      totalBuyingAmount: [{value: '', disabled : true}],
      expectedSellingAmount: [{value: '', disabled : true}],
      expectedSellingAmountForQtyInKgOrPiece: [{value: '', disabled : true}],
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
    //     qty: 10,
    //     oneQtyToKgOrPiece: 24, 
    //     get totalQtyInKgOrPiece() {
    //       return this.qty * this.oneQtyToKgOrPiece;
    //     },
    //     totalBuyingAmount: 5000,
    //     get buyingAmountForOneQty() {
    //       return Math.ceil(this.totalBuyingAmount / this.totalQtyInKgOrPiece);
    //     },
    //     get expectedSellingAmount() {
    //       return Math.ceil(this.totalBuyingAmount * (150 / 100));
    //     },
    //     get expectedSellingAmountForQty() {
    //       return Math.ceil(this.buyingAmountForOneQty * (150 / 100));
    //     }
    //   },
    //   {
    //     date: '12/09/2024',
    //     itemName: 'potato',
    //     procurementType: 'sack',
    //     qty: 10,
    //     oneQtyToKgOrPiece: 20, 
    //     get totalQtyInKgOrPiece() {
    //       return this.qty * this.oneQtyToKgOrPiece;
    //     },
    //     totalBuyingAmount: 6000,
    //     get buyingAmountForOneQty() {
    //       return Math.ceil(this.totalBuyingAmount / this.totalQtyInKgOrPiece);
    //     },
    //     get expectedSellingAmount() {
    //       return Math.ceil(this.totalBuyingAmount * (150 / 100));
    //     },
    //     get expectedSellingAmountForQty() {
    //       return Math.ceil(this.buyingAmountForOneQty * (150 / 100));
    //     }
    //   },
    //   {
    //     date: '13/09/2024',
    //     itemName: 'cauliflower',
    //     procurementType: 'sack',
    //     qty: 20,
    //     oneQtyToKgOrPiece: 20, 
    //     get totalQtyInKgOrPiece() {
    //       return this.qty * this.oneQtyToKgOrPiece;
    //     },
    //     totalBuyingAmount: 8000,
    //     get buyingAmountForOneQty() {
    //       return Math.ceil(this.totalBuyingAmount / this.totalQtyInKgOrPiece);
    //     },
    //     get expectedSellingAmount() {
    //       return Math.ceil(this.totalBuyingAmount * (150 / 100));
    //     },
    //     get expectedSellingAmountForQty() {
    //       return Math.ceil(this.buyingAmountForOneQty * (150 / 100));
    //     }
    //   }
    // ];
    // this.totalItemsDataSource = new MatTableDataSource(totalItemsDataSource);
  }
  
  submitItem(){

  }

  itemFormChanged(form: any){
  this.itemForm.get("qty").valueChanges.subscribe(() => {
    if(this.itemForm.get("oneQtyToKgOrPiece").value){
      let totalQtyInKgOrPiece = Math.ceil(this.itemForm.get("qty").value * this.itemForm.get("oneQtyToKgOrPiece").value);
      this.itemForm.controls['totalQtyInKgOrPiece'].setValue(totalQtyInKgOrPiece);
    }  
  });
  this.itemForm.get("oneQtyToKgOrPiece").valueChanges.subscribe(() => {
    if(this.itemForm.get("qty").value){
      let totalQtyInKgOrPiece = Math.ceil(this.itemForm.get("qty").value * this.itemForm.get("oneQtyToKgOrPiece").value);
      this.itemForm.controls['totalQtyInKgOrPiece'].setValue(totalQtyInKgOrPiece);
    }          
  });
  this.itemForm.get("buyingAmountForOneQty").valueChanges.subscribe(() => {
    if(this.itemForm.get("qty").value && this.itemForm.get("oneQtyToKgOrPiece").value){
      let totalBuyingAmount = Math.ceil(this.itemForm.get("qty").value * this.itemForm.get("buyingAmountForOneQty").value);
      let buyingAmountForOneQtyInKgOrPiece = Math.ceil(totalBuyingAmount / this.itemForm.get("totalQtyInKgOrPiece").value);
      let expectedSellingAmount = Math.ceil(totalBuyingAmount * (140/100));
      let  expectedSellingAmountForQtyInKgOrPiece = Math.ceil(buyingAmountForOneQtyInKgOrPiece * (140/100));

      this.itemForm.controls['totalBuyingAmount'].setValue(totalBuyingAmount);
      this.itemForm.controls['buyingAmountForOneQtyInKgOrPiece'].setValue(buyingAmountForOneQtyInKgOrPiece);
      this.itemForm.controls['expectedSellingAmount'].setValue(expectedSellingAmount);
      this.itemForm.controls['expectedSellingAmountForQtyInKgOrPiece'].setValue(expectedSellingAmountForQtyInKgOrPiece);
    }   
  });
  }
  applyFilterTotalItems(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.totalItemsDataSource.filter = filterValue.trim().toLowerCase();
  }
}
