import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-insert-currencies',
  imports: [...STANDALONE_SHARED_IMPORTS],
  templateUrl: './insert-currencies.component.html',
  styleUrl: './insert-currencies.component.scss'
})
export class InsertCurrenciesComponent {
  officeData: string[] = [];

  insertCurrencyForm = new FormGroup({
    currencyCode: new FormControl('', {
      validators: [Validators.required]
    }),
    currencyName: new FormControl('', {
      validators: [Validators.required]
    }),
    decimalPlaces: new FormControl('', {
      validators: [Validators.required]
    }),
    inMultiplesOf: new FormControl('', {
      validators: [Validators.required]
    }),
    displaySymbol: new FormControl('', {
      validators: [Validators.required]
    }),
    nameCode: new FormControl('', {
      validators: [Validators.required]
    })
  });

  onSubmit() {
    console.log('Submit Button Pressed!', this.insertCurrencyForm);

    this.insertCurrencyForm.reset();
  }
}
