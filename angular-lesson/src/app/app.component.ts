import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-lesson";
  checkoutForm = this.formBuilder.group({
    title: "",
    link: "",
  });
  constructor(private formBuilder: FormBuilder) {}
  onSubmit(): void {
    // Process checkout data here
    console.log("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
