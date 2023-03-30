import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demoreactiveforms',
  templateUrl: './demoreactiveforms.component.html',
  styleUrls: ['./demoreactiveforms.component.css'],
})
export class DemoreactiveformsComponent implements OnInit {
  form: FormGroup;
  constructor(formbuilder: FormBuilder) {
    this.form = formbuilder.group({
      sku: ['ABCD123'],
    });
  }
  ngOnInit() {}
  onSubmit(value: string) {
    console.log(value);
  }
}
