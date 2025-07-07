import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';

@Component({
  selector: 'mifosx-insert-currencies',
  imports: [...STANDALONE_SHARED_IMPORTS],
  templateUrl: './insert-currencies.component.html',
  styleUrl: './insert-currencies.component.scss'
})
export class InsertCurrenciesComponent implements OnInit {
  ngOnInit(): void {
    // To append currency to Currency Name Code
    this.insertCurrencyForm.get('currencyCode')?.valueChanges.subscribe((currencyCodeVal: string | null) => {
      const nameCodeVal = `currency.${currencyCodeVal.toUpperCase() || ''}`;
      this.insertCurrencyForm.get('nameCode')?.setValue(nameCodeVal, { emitEvent: false });
    });
    // Uppercase when user enters Currency Code
    this.insertCurrencyForm.get('currencyCode')?.valueChanges.subscribe((value) => {
      if (typeof value === 'string') {
        const capitalized = value.toUpperCase();
        if (value !== capitalized) {
          this.insertCurrencyForm.get('currencyCode')?.setValue(capitalized, {
            emitEvent: false
          });
        }
      }
    });
  }

  insertCurrencyForm = new FormGroup({
    currencyCode: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3)]
    }),
    currencyName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(50)]
    }),
    decimalPlaces: new FormControl<number>(2, {
      validators: [Validators.required]
    }),
    inMultiplesOf: new FormControl<number>(0.01, {
      validators: [
        Validators.required,
        Validators.max(1),
        Validators.min(0.001)]
    }),
    displaySymbol: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(10)]
    }),
    nameCode: new FormControl('currency.', {
      validators: [Validators.pattern('^currency\.[A-Z]{3}$')]
    })
  });

  onSubmit() {
    console.log('Currency Code: ', this.insertCurrencyForm.controls.currencyCode.value);
    console.log('Currency Name: ', this.insertCurrencyForm.controls.currencyName.value);
    console.log('Decimal Places: ', this.insertCurrencyForm.controls.decimalPlaces.value);
    console.log('In Multiples Of: ', this.insertCurrencyForm.controls.inMultiplesOf.value);
    console.log('Display Symbol: ', this.insertCurrencyForm.controls.displaySymbol.value);
    console.log('Name Code: ', this.insertCurrencyForm.controls.nameCode.value);
    this.insertCurrencyForm.reset({}, { emitEvent: false });
  }

  isCurrencyCodeValid() {
    return (
      this.insertCurrencyForm.controls.currencyCode.invalid &&
      this.insertCurrencyForm.controls.currencyCode.touched &&
      this.insertCurrencyForm.controls.currencyCode.hasError('required')
    );
  }

  isCurrencyCodeMinLengthValid() {
    return this.insertCurrencyForm.controls.currencyCode.hasError('minlength');
  }
}
