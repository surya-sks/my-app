import { Component, EventEmitter, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommonServiceService } from '../../services/common.service';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, RouterOutlet, CommonModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {
 
}
