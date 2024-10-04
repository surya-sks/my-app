import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-bill-generate',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe],
  templateUrl: './bill-generate.component.html',
  styleUrl: './bill-generate.component.css'
})
export class BillGenerateComponent {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: any[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
