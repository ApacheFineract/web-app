import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCurrenciesComponent } from './insert-currencies.component';

describe('InsertCurrenciesComponent', () => {
  let component: InsertCurrenciesComponent;
  let fixture: ComponentFixture<InsertCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertCurrenciesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
