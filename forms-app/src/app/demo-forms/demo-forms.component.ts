import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.css']
})
export class DemoFormsComponent implements OnInit {
  myForm : FormGroup;
  sku: AbstractControl;
  
  constructor(fb : FormBuilder) {
    this.myForm = fb.group({
      'sku':['', Validators.compose([ Validators.required, this.skuValidator])]});
    this.sku = this.myForm.controls['sku'];
   }

  ngOnInit(): void {
  }
  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
    return {invalidSku: true};
    }
  }

  
  onSubmit(value:string){
    console.log("you submitted a value:", value)
  }
  onSubmitWithBuilder(value:string){
    console.log("you submitted a value on FormBuilder:", value);
  }

}

