import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPriceListComponent } from './items-price-list.component';

describe('ItemsPriceListComponent', () => {
  let component: ItemsPriceListComponent;
  let fixture: ComponentFixture<ItemsPriceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsPriceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
