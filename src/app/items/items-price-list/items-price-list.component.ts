import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { items } from '../../models/common-models';

@Component({
  selector: 'app-items-price-list',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    DatePipe],
  templateUrl: './items-price-list.component.html',
  styleUrl: './items-price-list.component.css'
})
export class ItemsPriceListComponent {
  accordion = viewChild.required(MatAccordion);
  todaysPriceListForItemssDisplayedColumns: string[] = ['itemName', 'price'];
  todaysPriceListForItemsDataSource: items[] = [];
  pastPriceListForItemssDisplayedColumns: string[] = ['date', 'itemName', 'price'];
  pastPriceListForItemsDataSource: items[] = [];
  todaysDate = new Date();
  submitItem(){

  }
}
