import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import { items } from '../models/common-models';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-items',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  accordion = viewChild.required(MatAccordion);
  totalItemsDisplayedColumns: string[] = ['itemName', 'amount', 'quantity', 'date'];
  totalItemsDataSource: items[] = [];
  soldItemsDisplayedColumns: string[] = ['itemName', 'amount', 'quantity', 'date'];
  soldItemsDataSource: items[] = [];
  remainingItemsDisplayedColumns: string[] = ['itemName', 'amount', 'quantity', 'date'];
  remainingItemsDataSource: items[] = [];
  submitItem(){

  }
}
