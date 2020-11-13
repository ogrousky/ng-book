import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.css']
})
export class DemoFormsComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  submitted: boolean;
  productName: string;

  constructor(fb: FormBuilder) {
    this.submitted = false;
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])]
    });
    this.productName = "ng-book: The Complete Guide to Angular"
    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }

  ngOnInit(): void {
  }
  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
  }



  onSubmit(value: string) {
    this.submitted = true
    console.log("you submitted a value:", value)
  }
  onSubmitWithBuilder(value: string) {
    this.submitted = true
    console.log("you submitted a value on FormBuilder:", value);
  }

}

